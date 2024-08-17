import "./style.css";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import { TipProvider } from "context/TipContext";

function App() {
  return (
    <>
      <TipProvider>
        <Header />
        <Main />
        <Footer />
      </TipProvider>
    </>
  );
}

export default App;
