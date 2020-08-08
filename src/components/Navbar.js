import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { languageContext } from "../context/contextApi";
import translate from "../content/Navbar";
import logo from "../media/logo-light.svg";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const { language, setLanguage } = useContext(languageContext);
  const [navActive, setNavActive] = useState(false);
  let t = translate[language];

  let link = (path, txt) => {
    return (
      <li onClick={(e) => setNavActive(false)}>
        <NavLink to={`/${path}`} activeClassName="active-item">
          {txt}
        </NavLink>
      </li>
    );
  };
  return (
    <header className="container">
      <nav className={`${navActive}`}>
        <Fade triggerOnce>
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="sh-logo" />
            </NavLink>
          </div>
        </Fade>
        <div className={`nav-list ${navActive}`}>
          <Fade triggerOnce delay="200">
            <ul>
              {link("snow-house", t.snowhouse)}
              {link("location", t.location)}
              {link("gallery", t.gallery)}
              {link("gudauri", t.gudauri)}
              {link("contact", t.contact)}
              {link("reviews", t.reviews)}
            </ul>
          </Fade>
        </div>
        <Fade delay="400" triggerOnce>
          <div className="book-btn">
            <a
              href="http://booking.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.book}
            </a>
          </div>
        </Fade>
        <div className="wrapper">
          <Fade delay="600" triggerOnce>
            <div className="language-select">
              <span
                className={language === "en" ? "en selected" : "en"}
                onClick={(e) => setLanguage("en")}
              >
                En
              </span>
              <span
                className={language === "ge" ? "ge selected" : "ge"}
                onClick={(e) => setLanguage("ge")}
              >
                Ge
              </span>
            </div>
          </Fade>
          <Fade triggerOnce delay="800">
            <button
              className={`hamburger hamburger--arrowalt ${
                navActive ? "is-active" : null
              }`}
              type="button"
              onClick={(e) => setNavActive((navActive) => !navActive)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </Fade>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
