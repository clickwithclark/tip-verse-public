import "./style.css";
function Tip({ title, description, language }) {
  return (
    <div className="tip__container">
      <h2 className="tip__title">{title}</h2>
      <p className="tip__description">
     {description}
      </p>
      <span className="tip__language">{language}</span>
    </div>
  );
}

export default Tip;
