import React from "react";

const Experiment8 = (props) => {
  return (

    <div className="pt-5" id="Experiment8">
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
            {props.title}
            Experiment No. 8 Title: Study of Flip-flops
          </div>

          <div className="container p-3">
            {props.aim}
            Aim: To Study D Flip Flop and JK Flip Flop
          </div>

          <div className="container p-3">
            {props.apparatus}
            Apparatus: Power Supply, , Bread Board, (IC 7476, 7474) & Wires.
          </div>

          <div className="container p-3">
            {props.theory}
            Theory:
            Part A: IC 7474 (D flip flop). -
            The D flip flop Ic 7474 contains two edge triggered D flip flops with

            Complementory outputs. The information on the I/P is accepted by the flip flops on the +ve
            edge of the clock pulse. The triggering occurs at a voltage level & is then directly related

            to the transition time of the rising edge of the clock, The data on the D input may be changed
            while the CLK is low or high without affecting the O/P’s.


            part B: JK Flip Flop
            J-K flip flop is the MOst Widely used of all the flip flop designs and is
            considered to be a Universal flip flop circuit.

            The Sequentia] Operation of JK flip flop is exactly same as that of SR Flip Flop
            The difference is that JK flip has no invalid or forbidden states as that of SR Flip Flop

            JK flip-flop is basically a gated SR flip flop with the addition of clock input
            Circuitry that Prevents the illegal or invalid output condition that can occur
            when both the inputs § and R are equal to logic level 1.

            Due to this additional Clock input J-K flip flop has four output combinations
            as” logic 0”, “logic 1”, “NC(No change)”, “toggle”.
          </div>

          <div className="container p-3">
            {props.procedure}
            Procedure :

            1. Do the connections as per circuit diagram.

            2. Keep G1a & G1b , pins to low and G1 pin to high to enable this IC.

            3. Give different input combination & observe output.
          </div>

          <div className="container p-3">
            {props.images}
          </div>

          <div className="container p-3">
            {props.conclusion}
            Conclusion :
            Thus we studied 3:8 decoder using IC 74138 and observed output voltage.

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

export default Experiment8;
