import React from "react";
import ProgressBar from "react-animated-progress-bar";
import Jack from "../images/Jack-photo.png";

const About = () => {
  const myRef = document.querySelector(".scrollable-div");
  return (
    <div id="about_section" className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <span className="line-sec"></span> About Me
          </h2>
          <p>
            I am a highly self-motivated Full Stack Web Developer who spends
            most of his time building applications and keeping myself up to date
            with the latest technologies.{" "}
          </p>
          <img src={Jack} alt={Jack} style={{ width: "350px" }} />
          <br />
          <p className="text-left my-3">
            <a
              href="https://drive.google.com/file/d/11bQgyj8z7asQ-QAeJcdijDCiqsGoe7Ib/view"
              target="_blank"
              className="custom_button_common"
            >
              Download Resume
            </a>
          </p>
        </div>
        <div className="col-md-6 my-3 px-5 scrollable-div">
          <h3 className="my-2">My Skills</h3>
          <br />
          <br />
          <h5>Web Design</h5>
          <ProgressBar
            width="100%"
            height="20px"
            trackWidth="20"
            percentage="95"
            scrollArea={myRef}
            rect
            fontColor="#000"
            trackPathColor="#ddd"
            bgColor="#000"
            trackBorderColor="#fff"
          />

          <h5 className="my-3">JavaScript</h5>
          <ProgressBar
            width="100%"
            height="20px"
            trackWidth="20"
            percentage="90"
            scrollArea={myRef}
            rect
            fontColor="#000"
            trackPathColor="#ddd"
            bgColor="#000"
            trackBorderColor="#fff"
          />

          <h5 className="my-3">Nodejs</h5>
          <ProgressBar
            width="100%"
            height="20px"
            trackWidth="20"
            percentage="85"
            scrollArea={myRef}
            rect
            fontColor="#000"
            trackPathColor="#ddd"
            bgColor="#000"
            trackBorderColor="#fff"
          />

          <h5 className="my-3">React</h5>
          <ProgressBar
            width="100%"
            height="20px"
            trackWidth="20"
            percentage="80"
            scrollArea={myRef}
            rect
            fontColor="#000"
            trackPathColor="#ddd"
            bgColor="#000"
            trackBorderColor="#fff"
          />

          <h5 className="my-3">Angular</h5>
          <ProgressBar
            width="100%"
            height="20px"
            trackWidth="20"
            percentage="70"
            scrollArea={myRef}
            rect
            fontColor="#000"
            trackPathColor="#ddd"
            bgColor="#000"
            trackBorderColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
