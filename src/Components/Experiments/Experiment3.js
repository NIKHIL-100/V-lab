import React from "react";

const Experiment3 = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiment3">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">

          <div className="container text-center  p-2">
          {props.title}
          Experiment No. 3 Title: Study of De-Morgan's Theorem & Duality Theorem
          </div>

          <div className="container p-3">
          {props.aim}
            Aim: To study De-Morgan's Theorem & Duality Theorem
          </div>

          <div className="container p-3">
          {props.apparatus}
            Apparatus: Power Supply, multimeter, Bread Board, (IC 7400, 7402,) & Wires.
          </div>

          <div className="container p-3">
          {props.theory}
          Theory: 
          1. First Theorem:

          It says that NOR gate is equivalent to bubbled AND gate. It states that
          complement of sum of two inputs is equal to, product of complement of individual
          inputs.

          2. Second THeorem:

          It says that NAND gate is equivalent to bubbled OR gate. It states that
          complement of product of two inputs is equal to sum of complement of individual input.
          
          3. Duality theorem:
          It says that starting with any Boolean equation you can derive other Boolean
          equation by
          1. changing each OR sign by AND.
          2. changing each AND sign by OR.
          3. complementing any zero by 1 appearing in the given expression.

          </div>

          <div className="container p-3">
          {props.procedure}
          Procedure :
          1. Connect circuit as shown in circuit diagram.

          2. Apply the supply to circuit as pin 14 to +VCC & pin 7 to ground.
          3. Note down the o/p voltage by multimeter.

          4. Verify the equations by observed readings. 
          </div>

          <div className="container p-3">
          {props.images}
          </div>

          <div className="container p-3">
          {props.conclusion}
          Conclusion :
          Thus the De-Morgan’s theorem is verified using NAND and NOR gates.
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

export default Experiment3;
