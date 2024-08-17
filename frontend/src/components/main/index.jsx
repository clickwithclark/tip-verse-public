import TipList from "../tip-list";
import "./style.css";
import Card from "../../components/shared/Card";
import TipContext from "context/TipContext";
import { useContext, useEffect, useRef } from "react";

function Main() {
  const { fetchTips } = useContext(TipContext);

  //avoiding double useEffect call that occurs in strictmode
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

     (async () => {
       await fetchTips();
     })();

    }
    
  
  }, []);
  return (
    <main>
      <TipList />
    </main>
  );
}

export default Main;
