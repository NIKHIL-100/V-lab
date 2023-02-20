import React from "react";
import TypewriterComponent from "typewriter-effect";

const Home1 = () => {
  return (
    <div className=" m-5 p-5 d-flex  justify-content-center" style={{backgroundImage:'url(https://cdn.svgator.com/images/2022/06/SVG-background-animation.gif)',backgroundSize:"contain"}}>
      <div className="container shadow-lg   d-flex  flex-row  justify-content-center border  bg-white" style={{borderRadius:"25px"}} >
      
        <div className="p-5 m-5 " >
        
          <h4 className="fe-bold text-muted text-center pt-5 " >welcome to virtual lab</h4>
          <h1 className="fe-bold text-center p-4 col-sm-5" style={{flexWrap:"wrap",backgroundPosition:"50%"}}>
            <TypewriterComponent
              options={{
                strings: ["Empowering Minds, One Click at a Time", "Learning Without Limits", "Virtual Learning, Real Results", "Education is not preparation for life; education is life itself.", "Breaking Boundaries with Virtual Learning"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>

        <div className="p-5 position-relative">
        <img
          className="  p-5 m-5 img-fluid "  style={{backgroundPosition:"50%"}}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2832fb71252497.5bbeed275ae64.gif"
          alt="img"
        />
        </div>
      </div>
    </div>
  );
};

export default Home1;
