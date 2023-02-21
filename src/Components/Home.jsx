import React from "react";
import './Home.css';
import TypewriterComponent from "typewriter-effect";

 const Home = () => {
  return (
    <div className=" home2 home2__img " id="pic1">
    {/* <div className=" home2 home2__img " id="pic2"> */}
  


      <div className="home2__bg ">
        <div className="container ">
          <div className="home2__content">
            <div className="home2 meta">
              <h1 className="home__text pz__10">WELCOME TO VIRTUAL LAB</h1>
              
            {/*  <h1 className="home__text pz__10">WELCOME TO VIRTUAL LAB</h1>*/}

              <h2 className="home__text pz__10">
              <TypewriterComponent
              options={{
                strings: ["Empowering Minds, One Click at a Time", "Learning Without Limits", "Virtual Learning, Real Results", "Education is not preparation for life; education is life itself.", "Breaking Boundaries with Virtual Learning"],
                autoStart: true,
                loop: true,
              }}
            />
               </h2>
              <h3 className="home__text "><u>E-Learning website</u></h3>
            </div>
          </div>
        </div>
      </div>

      
     {/* </div>  */} 
    </div>
  );
};

export default Home;