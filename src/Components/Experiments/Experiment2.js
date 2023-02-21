import React from "react";

const Experiment2 = (props) => {
  return (
    <div className="pt-5" id="Experiment2">
      <h1 className="text-center pt-5">
      <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
            {props.title}
            Experiment No. 2 Title: Study of Universal gates
          </div>
          <div className="container p-3">
            {props.aim}
            Aim: To verify truth table of various universal gates
          </div>
          <div className="container p-3">
            {props.apparatus}
            Apparatus: Power Supply, multimeter Bread Board, (IC 7400, 7402) &
            Wires.
          </div>

          <div className="container p-3">
            {props.theory}
            Theory: 1. NOR as Universal gate: a. NOR as NOT When 2 i/p of NOR ¢
            gate are shorted then. we get NOT. It has the same truth table as
            that of inverter itself. b. NOR as OR When the NOR gate is connected
            to NOR gate with both i/p shorted, we get OR gate & it has o/p as
            Y=A+B c. NOR as AND When the 2 NOR gate with shorted i/p are given
            to the 3™ NOR gate, the o/p of 3 NOR gate gives the AND gate."
          </div>

          <div className="container p-3">
            {props.procedure}
            Procedure : 1. Connect circuit as shown in circuit diagram. 2. Apply
            the supply to circuit as pin 14 to +VCC & pin 7 to ground. 3. Note
            down the o/p voltage by multimeter. 4. Verify the truth table by
            observed readings.
          </div>

          <div className="container p-3">{props.images}</div>

          <div className="container p-3">
            {props.conclusion}
            Conclusion : Thus we obtained basic logic gates using universal NAND
            and NOR gates and verified the truth table.
          </div>

          <div className="container p-3">Simulation</div>

          <div
            class="embed-responsive embed-responsive-16by9 "
            className="container w-100 d-flex justify-content-center p-0  position-relative"
          >
            <iframe
              width="725"
              height="453"
              title="andGate"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
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

export default Experiment2;
