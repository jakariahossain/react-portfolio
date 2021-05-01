import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="container">
      <div className="row banner" id="banner_main">
        <div className="col-md-12 text-left">
          <h1>
            Hello, I'm <span class="color_text">Jakaria Hossain</span> <br />
          </h1>
          <Typed
            className="typed-text"
            typeSpeed={60}
            loop
            strings={[
              "Full Stack Web Developer",
              "MERN E-commerce",
              "MERN Landing Page",
            ]}
          />
          <br />
          <br />

          <a
            href="https://drive.google.com/file/d/11bQgyj8z7asQ-QAeJcdijDCiqsGoe7Ib/view"
            target="_blank"
            className="custom_button_common"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
