import React from "react";

const Experiment7 = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiment7">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
          {props.title}
          Experiment No. 7 Title: Study of decade counter using IC7490 and observe the counting sequence
          </div>

          <div className="container p-3">
          {props.aim}
            Aim: To Study decade counter using IC7490 and observe the counting sequence
          </div>

          <div className="container p-3">
          {props.apparatus}
            Apparatus: Power Supply, multimeter, Bread Board, CRO , IC 7490 , Wires , LED , Resistors , Function Generator
          </div>

          <div className="container p-3">
          {props.theory}
          Theory: The counters are digital circuits capable of counting the applied clock pulses. 

          Thecounters are obtained cascad 11 g JK flip-flops. 
          These are sequential circuits. 
          There are two types of counters
          
          1, Asynchronous counters.
          2. Synchronous counters,
          Asynchronous counter is simple and straight forward in operation and usually
          
          requires minimum of hardware. Each flip-flop is triggered by previous flip-flop and thus has
          speed limitation.
          
          An increase in speed operation can be achieved by use of Synchronous/
          parallel counters. Here each flip- flop is triggered by the clock pulse, so that their output
          changes simultaneously. So these counters are fast.
          IC 7490 is asynchronous decade counter.
          </div>

          <div className="container p-3">
          {props.procedure}
          Procedure :
          1. Make the connections & apply the supply to the circuit by using pin configurations
          2. Apply proper I/P configuration as per the given truth table.
          3. Check the O/P with respective to the input conditions from the truth table. 
          </div>

          <div className="container p-3">
          {props.images}
          </div>

          <div className="container p-3">
          {props.conclusion}
          Conclusion :
          Thus we studied D flip flop and JK flip flop using IC 7474 and IC 7476.
          
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

export default Experiment7;
