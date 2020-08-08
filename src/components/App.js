import React, { useState, useEffect } from "react";
import { languageContext } from "../context/contextApi";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/main.scss";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  if (localStorage.length === 0) {
    localStorage.setItem("lang", "en");
  }

  const [language, setLanguage] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <Router>
      <languageContext.Provider value={{ language, setLanguage }}>
        <div
          className={`app-wrapper dif-container ${
            language === "en" ? "english" : "georgian"
          }`}
        >
          <Navbar />
          <Main />
          <Footer lang={language} />
        </div>
      </languageContext.Provider>
    </Router>
  );
}

export default App;
