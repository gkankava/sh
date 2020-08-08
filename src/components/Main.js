import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Gallery from "../pages/Gallery";
import Location from "../pages/Location";
import { languageContext } from "../context/contextApi";

const Main = () => {
  const { language } = useContext(languageContext);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Homepage {...props} lang={language} />}
      />
      <Route
        exact
        path="/gallery"
        render={(props) => <Gallery {...props} lang={language} />}
      />
      <Route
        exact
        path="/location"
        render={(props) => <Location {...props} lang={language} />}
      />
    </Switch>
  );
};

export default Main;
