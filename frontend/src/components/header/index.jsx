import { useState } from "react";
import "./style.css";
import TipverseLogo from "img/TipverseLogo.png";
import { useContext } from "react";
import { TipContext } from "context/TipContext";
import Modal from "components/modal/index.jsx";
function Header() {
  const { tips, setFilteredTips, showModal, setShowModal } =
    useContext(TipContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    let resultsTitle = null;
    let resultsDescription = null;
    let resultsLanguage = null;
    e.preventDefault();

    resultsTitle = tips.filter((tip) =>
      tip.title.toLowerCase().includes(searchText.toLowerCase())
    );
    //accumulate results for title, description and finally language

    resultsDescription = tips.filter((tip) =>
      tip.description.toLowerCase().includes(searchText.toLowerCase())
    );

    resultsLanguage = tips.filter((tip) =>
      tip.language.toLowerCase().includes(searchText.toLowerCase())
    );
    //set to remove duplicates
    const uniqueResults = [
      ...new Set([...resultsTitle, ...resultsDescription, ...resultsLanguage]),
    ];
    setFilteredTips(uniqueResults);
  };
  return (
    <>
      <header>
        <div className="header-container">
          <div className="heading__logo-wrapper">
            <h2 className="header__heading"> TipVerse</h2>
            <figure className="header__logo">
              <img src={TipverseLogo} alt="TipVerse Logo" />
            </figure>
            <h3 className="header__subheading">
              Explore the TipVerse: Endless Tips, Infinite Learning!
            </h3>
          </div>
          <form onSubmit={handleSearch} className="header__form">
            <input
              className="header__search-input"
              type="text"
              value={searchText}
              placeholder="find a tip.."
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={handleSearch}
            />
            <div className="header__btn-wrapper">
              <input
                className="header__post-btn"
                type="button"
                value="Post Tip"
                onClick={() => setShowModal(true)}
              />
            </div>
          </form>
          <div className="header__filters">
            <input
              className="header__filter-python-btn"
              value="Python"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter((tip) => tip.language.toLowerCase() === "python")
                )
              }
            />
            <input
              className="header__filter-js-btn"
              value="JavaScript"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter(
                    (tip) => tip.language.toLowerCase() === "javascript"
                  )
                )
              }
            />
            <input
              className="header__filter-ruby-btn"
              value="Ruby"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter((tip) => tip.language.toLowerCase() === "ruby")
                )
              }
            />
            <input
              className="header__filter-go-btn"
              value="Go"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter((tip) => tip.language.toLowerCase() === "go")
                )
              }
            />
            <input
              className="header__filter-java-btn"
              value="Java"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter((tip) => tip.language.toLowerCase() === "java")
                )
              }
            />
            <input
              className="header__filter-cpp-btn"
              value="C++"
              type="button"
              onClick={() =>
                setFilteredTips(() =>
                  tips.filter((tip) => tip.language.toLowerCase() === "c++")
                )
              }
            />
            <input
              className="header__filter-all-btn"
              type="button"
              value="All"
              onClick={() => setFilteredTips(tips)}
            />
          </div>
        </div>
        {showModal && <Modal />}
      </header>
    </>
  );
}

export default Header;
