import React from "react";

const About = () => {
  return (
    <div id="About">
    <div className="bg-dark p-3" >
      <h1 className="text-center text-white m-4 p-4 ">
        <u>ABOUT</u>
      </h1>
      

        <div className="container  m-5 p-5">
        <div className="container m-5 pt-4">
        <h1 className="text-center text-muted mt-4 pt-4">
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
            As one of the most important eLearning tools, they allow the student
            to Learn various experiments without any constraints to place or
            time, in contrast to the constraints of real labs
          </b>
        </p>

        </div>
    </div>
    </div>
  );
};

export default About;
