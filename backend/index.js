import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

/* -------------------------------------------------------------------*/
// #region [helper functions to migrate]
/* -------------------------------------------------------------------*/
// check for empty fields server side
function validateFormData(...inputFields) {
  const values = [];
  let hasFields = true;
  values.push(...inputFields);
  if (values.length === 0) {
    return false;
  }
  values.forEach((input) => {
    if (typeof input === "undefined" || input.length === 0) {
      hasFields = false;
    }
  });
  return hasFields;
}

/* -------------------------------------------------------------------*/
//#endregion [helper functions to migrate]

app.get("/tips", async (req, res) => {
  const options = {
    headers: {
      "X-Cassandra-Token": process.env.VITE_TOKEN,
    },
  };

  let allData = [];
  let hasMoreData = true;
  let nextPageUrl = `?page-size=20`;

  try {
    while (hasMoreData) {
      const response = await axios(`${process.env.DB_HOST_URL}${nextPageUrl}`, options);
      const data = response.data.data;
      allData = allData.concat(data);
      // Check if there's more data to fetch
      // Update with the URL for the next page
      nextPageUrl = `?page-state=${response.data.pageState}`;
      // Continue if there is a next page URL
      hasMoreData = !!response.data.pageState;
      
    }

    res.send(allData);
  } catch (error) {
    // res.status(500).send("Error fetching data");
    console.error(error);
  }
});

app.post("/tips", async (req, res) => {
  const { title, description, language, date } = req.body;
  console.log(req.body);
  const newTip = {
    id: uuidv4(),
    title,
    description,
    language,
    date,
  };
  const data = JSON.stringify(newTip);
  const hasNoEmptyValues = validateFormData(title, description, language);

  const headers = {
    "X-Cassandra-Token": process.env.VITE_TOKEN,
    accept: "application/json",
    "Content-Type": "application/json",
  };

  try {
    if (!hasNoEmptyValues) {
      return res.send("Please fill in all fields!");
    }

    const response = await axios.post(process.env.DB_HOST_URL, data, {
      headers,
    });
    const { documentId } = await response.data;
    res.send(JSON.stringify(`Tip Posted with ID: ${documentId}`));
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
