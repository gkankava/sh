import React from "react";
import translate from "../content/Location";
import { Fade } from "react-awesome-reveal";

function Location({ lang }) {
  let t = translate[lang];
  return (
    <section id="location" className="container">
      <Fade triggerOnce delay="200">
        <h1>{t.header}</h1>
      </Fade>
      <Fade triggerOnce delay="400">
        {/* <iframe
          title="snow-house"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1613.7531812576274!2d44.48381117295925!3d42.472041972233185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3bebcbb6a1ebd346!2sSnow%20House!5e0!3m2!1sen!2sge!4v1596717397448!5m2!1sen!2sge"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex="0"
        ></iframe> */}
        <iframe
          title="snow-house"
          border="0"
          marginWidth="0"
          marginHeight="0"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex="0"
          src="https://www.mapquest.com/embed?center=42.47153503704763,44.48447406291962&zoom=17&maptype=map"
        ></iframe>
      </Fade>
      <Fade triggerOnce delay="600">
        <div className="wrap">
          <p className="p1">{t.p1}</p>
          <p className="p2">{t.p1}</p>
        </div>
      </Fade>
    </section>
  );
}

export default Location;
