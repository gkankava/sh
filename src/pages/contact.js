import React from "react";
import translate from "../content/Contact";

function contact({ lang }) {
  let t = translate[lang];
  return (
    <section id="contact">
      <h1>{t.header}</h1>
      <div className="h-wrap container">
        <div className="wrapp ">
          <div className="w mob">
            <i className="las la-mobile"></i>
            <span>(+995) 000 00 00 00</span>
          </div>
          <div className="w mob">
            <i className="las la-mobile"></i>
            <span>(+995) 000 00 00 00</span>
          </div>
          <div className="w mob">
            <i className="las la-mobile"></i>
            <span>(+995) 000 00 00 00</span>
          </div>
          <div className="w ml">
            <i className="las la-envelope"></i>
            <span>contact@snowhouse.ge</span>
          </div>
        </div>
        <div className="wrap-v">
          <a href="https://facebook.com">
            <div className="w fc">
              <i className="lab la-facebook-square"></i>
              <span>/snowhouse</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default contact;
