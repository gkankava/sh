import React, { useState, forwardRef } from "react";
import translate from "../content/Gudauri";
import { Slide, Fade } from "react-awesome-reveal";
import YouTube from "react-youtube";
import Card from "../components/Card";

function Gudauri({ lang }) {
  let t = translate[lang];
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  const [vidActive, setVidActive] = useState("inactive");
  function _onReady(event) {}

  const Vid = forwardRef((props, ref) => (
    <YouTube
      videoId="gDe_wf5Meys"
      opts={opts}
      className="yt-video"
      onReady={_onReady}
      ref={ref}
    />
  ));
  const ref = React.createRef();

  return (
    <section id="gudauri">
      <div className="wrapper container">
        <div className="header">
          <h1>{t.header}</h1>
        </div>
        <Fade triggerOnce delay="400">
          <div className="content">
            <Slide triggerOnce delay="500" direction="left">
              <p className="p1">{t.p1}</p>
            </Slide>
            <Slide triggerOnce delay="500" direction="right">
              <p className="p2">{t.p2}</p>
            </Slide>
          </div>
        </Fade>
      </div>
      <Fade triggerOnce delay="800">
        <div className="video">
          <i
            className="las la-play-circle"
            onClick={(e) => {
              setVidActive("active-v");
            }}
          ></i>
          <div className={`fx-video ${vidActive}`}>
            <Vid ref={ref} />

            <i
              className="las la-times-circle"
              onClick={(e) => {
                setVidActive("inactive");
                ref.current.internalPlayer.stopVideo();
              }}
            ></i>
          </div>
        </div>
      </Fade>
      <Fade delay="200" triggerOnce>
        <div className="container cards">
          <Card
            img="card-img-1.jpg"
            title={t.card_1.h}
            content=""
            btn={t.card_1.b}
            ico="las la-tv"
            href="http://gudauri.ski/eng/main/index/29"
          />
          <Card
            img="card-img-2.jpg"
            title={t.card_2.h}
            content=""
            btn={t.card_2.h}
            ico="las la-cloud"
            href="https://www.yr.no/place/Georgia/Other/Gudauri/"
          />

          <Card
            img="card-img-3.png"
            title={t.card_3.h}
            content=""
            btn={t.card_3.h}
            ico="las la-map"
            href="http://gudauri.ski/eng/main/index/23"
          />
        </div>
      </Fade>
    </section>
  );
}

export default Gudauri;
