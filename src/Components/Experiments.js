import React from "react";

const Experiments = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiments">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
          {props.title}
            Experiment No. 1 Title: Study of TTL gates
          </div>
          <div className="container p-3">
          {props.aim}
            Aim: To verify truth table of various gates
          </div>
          <div className="container p-3">
          {props.apparatus}
            Apparatus: Power Supply, multimeter, Bread Board, (IC 7400, 7402,
            7408, 7432,7404, 7486) & Wires.
          </div>

          <div className="container p-3">
          {props.theory}
            Theory: The TTL Gates are nothing but Transistor-Transistor Logic,
            which is introduced by the Texas instruments in 1964. It is widely
            used family of digital devices. It is a fast, inexpensive & easy to
            use, TIL uses active low as well as active high signals, -ve logic
            may be used as well as +ve logic. In turn this leads to assertion
            level logic, a way of drawing gates & labeling signals that enhances
            circuit analysis. TTL is saturated logic. It has become the most
            popular bipolar type of IC. The 7400 Series, a line of the TTL
            circuit has becomes the most widely used group of bipolar ICs.
            Specifications: 1) Supply Voltage (Vcc): 4.75 to 5.25V. 2)
            High-level I/P. Voltage (Vim): 2V. 3) Low level I/P Voltage (Vi.):
            O.8V. 4) High level O/P Current (lon): O.4mA. 5) Low level O/P
            Current (Io): 8mA. 6) Free Air Operating Temperature: 70°C 1)
            1€7408:- — : It is quad two I/P AND gate. It has DIP packaging. Two
            on each line, like That there are, 4 AND gates. This is also 14pins.
            The 14" pin is supplied with Vec while the 7" pin is at ground.
            Logical Expression=A.B
          </div>

          <div className="container p-3">Simulation</div>

          <div
            class="embed-responsive embed-responsive-16by9 "
            className="container w-100 d-flex justify-content-center p-0  position-relative"
          >
            <iframe width="725" height="453" title='andGate' frameborder="0" marginwidth="0" marginheight="0" scrolling="no"
              class="embed-responsive-item"
              src="https://www.tinkercad.com/embed/hzFMfQH9PqU?editbtn=1"
              allowfullscreen
            ></iframe>
          </div>

         

        </div>
      </div>


 

    </div>

    
  );
};

export default Experiments;
