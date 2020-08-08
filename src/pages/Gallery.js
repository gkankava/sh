import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../content/Gallery";
import { Fade, Flash } from "react-awesome-reveal";

const Gallery = (props) => {
  return (
    <Fade triggerOnce delay="500">
      <section id="gallery" className="container">
        <ImageGallery
          items={images}
          lazyLoad={true}
          showPlayButton={true}
          autoPlay={true}
        />
      </section>
    </Fade>
  );
};

export default Gallery;
