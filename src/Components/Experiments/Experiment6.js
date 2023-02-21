import React from "react";

const Experiment6 = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiment6">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
          {props.title}
          Experiment No. 6 Title: Study of Demultiplexer
          </div>

          <div className="container p-3">
          {props.aim}
            Aim: To Study Demultiplexer
          </div>

          <div className="container p-3">
          {props.apparatus}
            Apparatus: Power Supply, multimeter,IC 74154 & Wires.
          </div>

          <div className="container p-3">
          {props.theory}
          Theory: Demultiplexer:
          The IC 74154 is 1:16 demultiplexer with pin diagram as shown.Pin 20 to
          23 are control bits A, B, C, D, Pin 1 to 11 and 13 to 17 are for output bits YO to Y15. Pin 19
          is for strobe and active low i input.
          
          When strobe is low, the control input ABCD: ‘determines which of the output
          lines is low when input is low. When the data input is high, similarly when strobe input is
          high all output lines are high.
          </div>

          <div className="container p-3">
          {props.procedure}
          Procedure :
          1. Connections are made according to the pin diagram shown in figure 
          2. Apply this applied to circuit as pin number 24 to VCC and pin number 12 to ground
          3. Apply input to pin 20 to 23.
          4. Note down output voltages by multimete.
          5. Verify the truth table
          </div>

          <div className="container p-3">
          {props.images}
          </div>

          <div className="container p-3">
          {props.conclusion}
          Conclusion :
          Thus we verified the multiplexer circuit using IC 74150
          
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
            style={{resize:"both",overflow:"auto"}}

            ></iframe>
          </div>



         

        </div>
      </div>



      

    </div>

    
  );
};

export default Experiment6;
