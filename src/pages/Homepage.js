import React from "react";
import Hero from "../components/Hero";

const Homepage = ({ lang }) => {
  const ref = React.createRef();
  return (
    <main id="homepage">
      <Hero lang={lang} refer={ref} />
      <section id="para" className="container" ref={ref}>
        <div className="p-wrapper">
          <h2>Snow House</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            sapiente ex explicabo facilis, voluptatum sed, modi incidunt nemo
            quam voluptate, sequi iusto laboriosam eveniet quidem mollitia ea
            cupiditate ab iste?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officia sapiente ex explicabo facilis, voluptatum
            sed, modi incidunt nemo quam voluptate, sequi iusto laboriosam
            eveniet quidem mollitia ea cupiditate ab iste?Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Officia sapiente ex explicabo
            facilis, voluptatum sed, modi incidunt nemo quam voluptate, sequi
            iusto laboriosam eveniet quidem mollitia ea cupiditate ab iste?Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Officia sapiente
            ex explicabo facilis, voluptatum sed, modi incidunt nemo quam
            voluptate, sequi iusto laboriosam eveniet quidem mollitia ea
            cupiditate ab iste? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officia sapiente ex explicabo facilis, voluptatum
            sed, modi incidunt nemo quam voluptate, sequi iusto laboriosam
            eveniet quidem mollitia ea cupiditate ab iste?Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Officia sapiente ex explicabo
            facilis, voluptatum sed, modi incidunt nemo quam voluptate, sequi
            iusto laboriosam eveniet quidem mollitia ea cupiditate ab iste?Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Officia sapiente
          </p>
        </div>
        <div className="img-cards"></div>
      </section>
      <section className="container" id=""></section>
    </main>
  );
};

export default Homepage;
