import React from "react";

const Experiment4 = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiment4">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
          {props.title}
          Experiment No. 4 Title: Study of Half Adder and Full Adder
          </div>
          <div className="container p-3">

          {props.aim}
            Aim: To Study Half Adder and Full Adder
          </div>
          <div className="container p-3">
          {props.apparatus}
            Apparatus: DC Power Supply (+5v), multimeter, Bread Board, (IC
            7408, 7432, 7486) & Wires.
          </div>

          <div className="container p-3">
          {props.theory}
          Theory: Half Adder: The logic circuit for addition of two one bit numbers is referred as half adder

          Full Adder: Half adder has only two inputs and there is no provision to add a carry coming
          from the lower order bits when the multi bit addition is performed. For this purpose a third
          input is added and this circuit is used to add to add An, Bn and Cn. Where An and Bn are the
          nth order bits of A & B respectively and Cn is the carry generated from the addition of nth
          order bits. Such circuits are referred as full adder. Here we study the full adder as IC 7483
          along with its data sheet.
          </div>

          <div className="container p-3">
          {props.procedure}
          Procedure :
          1. Make the connections as per the diagram

          2. Give the supply to the circuit as VCC=5V and apply ground to all ICs .
          3. Apply the inputs.

          4.Note down the voltages at sum and carry pins by multimeter.
          5.Vary these with function table values.
          </div>

          <div className="container p-3">
          {props.images}
          </div>

          <div className="container p-3">
          {props.conclusion}
          Conclusion :
          Thus we verified the truth table for half adder and Full adder.
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

export default Experiment4;
