import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-img p-5" id="About">
      <div className=" pb-5  pt-5">
        <h1 className="text-center text-white m-4 pb-4 ">
          <u>ABOUT</u>
        </h1>
        <div className="container d-flex-column justify-content-center  py-5 ">
          <div className="container mt-5 pt-4">
            <h1 className="text-center text-muted ">
              <b>Vision</b>
            </h1>
          </div>
          <p className="text-center  text-white m-4 ">
            <b>
              Virtual lab refers to a virtual teaching and learning environment
              aimed at developing students' laboratory skills.
            </b>
          </p>
          <p className="text-center text-white pb-5 mb-5">
            <b>
              As one of the most important eLearning tools, they allow the
              student to Learn various experiments without any constraints to
              place or time, in contrast to the constraints of real labs
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
