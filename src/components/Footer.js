import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo-dark.svg";
import translate from "../content/Navbar";

const Footer = ({ lang }) => {
  let t = translate[lang];
  let link = (path, txt) => {
    return (
      <li>
        <Link to={`/${path}`}>{txt}</Link>
      </li>
    );
  };
  return (
    <footer>
      <div className="top">
        <div className="wrapper container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="sh-logo" />
            </Link>
          </div>
          <hr />
          <a
            href="http://booking.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="book-btn">{t.book}</div>
          </a>
          <nav>
            <ul>
              {link("snow-house", t.snowhouse)}
              {link("location", t.location)}
              {link("gallery", t.gallery)}
              {link("gudauri", t.gudauri)}
              {link("contact", t.contact)}
              {link("reviews", t.reviews)}
            </ul>
          </nav>

          <div className="social">
            <a href="https://facebook.com">
              <div className="swp fc">
                <i className="lab la-facebook-square"></i>
                <span>/snowhouse</span>
              </div>
            </a>
            <div className="swp ml">
              <i className="las la-envelope"></i>
              <span>contact@snowhouse.ge</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">© Snow House</div>
      </div>
    </footer>
  );
};

export default Footer;
