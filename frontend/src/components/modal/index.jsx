import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { TipContext } from "context/TipContext";

function Modal() {
  const { setShowModal, showModal, fetchTips } = useContext(TipContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [postBtnValue, setpostBtnValue] = useState("Post Tip");

  /* -------------------------------------------------------------------*/
  // #region [change submit button value randomly]
  /* -------------------------------------------------------------------*/

  const phrases = [
    "Launch Your Tip to Tipverse",
    "Transmit to Tipverse",
    "Beam Up Your Tip",
    "Send to Tipverse",
    "Broadcast to Tipverse",
    "Fire Off Your Tip",
    "Share with Tipverse",
    "Send It to Tipverse",
    "Deploy Your Tip",
    "Tipverse Transmission",
  ];

  /* -------------------------------------------------------------------*/
  //#endregion [change submit button value randomly]
  // Keep track of the last phrase used

  const lastPhrase = useRef("");
  useEffect(() => {
    // stop scrolling when modal open
    const htmlDocument = document.getElementsByTagName("html")[0];
    showModal
      ? htmlDocument.classList.add("lock-scroll")
      : htmlDocument.classList.remove("lock-scroll");

    // change submit button value randomly

    if (showModal) {
      let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      // Keep generating a random phrase until it's different from the last one
      while (randomPhrase === lastPhrase.current) {
        randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      }
      setpostBtnValue(randomPhrase);
      // Update the last phrase used
      lastPhrase.current = randomPhrase;
    }

    return () => {
      htmlDocument.classList.remove("lock-scroll");
    };
  }, [showModal]);

  const postTips = async (e) => {
    e.preventDefault();
    const newTip = { title, description, language, date: new Date() };
    try {
      const response = await fetch(`${import.meta.env.VITE_DBHOST_URL}/tips`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTip),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    fetchTips();
    setShowModal(false);
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3 className="form-title">Let's add your Tip</h3>
          <button
            className="modal__close-btn"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
        <form className="modal-form" onSubmit={postTips}>
          <input
            className="modal-form__title"
            placeholder="Enter Tip Title"
            type="text"
            required
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="modal-form__description"
            placeholder="Enter Tip Description"
            type="text"
            required
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="modal-form__language"
            placeholder="Enter Tip Language"
            type="text"
            required
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <input
            type="submit"
            className="modal-form__submit-btn"
            value={postBtnValue}
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
