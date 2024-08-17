import Tip from "../tip";
import "./style.css";
// import sampleData from "data/sample-data.js";

import { useContext } from "react";
import { TipContext } from "context/TipContext";
import Spinner from "components/shared/Spinner";
function TipList() {
  const { tips, filteredTips, isLoading } = useContext(TipContext);
  let defaultData = tips;

  if (filteredTips !== null) {
    defaultData = filteredTips;
  }

  if (!defaultData || defaultData.length === 0) {
    return isLoading ? (
      <Spinner />
    ) : (
      <p className="tiplist__no-tips">No tips found...Surprisingly! </p>
    );
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {defaultData.map(({ id, title, description, language }) => (
        <Tip key={id} {...{ id, title, description, language }} />
      ))}
    </>
  );
}

export default TipList;
