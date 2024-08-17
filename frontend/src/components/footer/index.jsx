import "./style.css";
import TipverseLogo from "img/TipverseLogo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <figure className="footer__logo">
          <img src={TipverseLogo} alt="Tipverse Logo" />
        </figure>
        <div className="footer__github-log">
          <a href="https://github.com/clickwithclark/tip-verse-public">
            {" "}
            <img src="/src/assets/img/gh_logo.png" alt="github icon" />
          </a>
        </div>
        <div className="footer__details">
          <p className="footer__copyright">Copyright &copy; 2024</p>
          <p className="footer__author">Author: @clickwithclark</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
