import React from "react";

const Experiment5 = (props) => {
  return (
                          
    <div className="pt-5"  id="Experiment5">                
      <h1 className="text-center pt-5">
        <u>EXPERIMENTS</u>
      </h1>

      <div className="container my-5  d-flex justify-content-center bg-dark">
        <div className="container-fluid text-white m-5  ">
          <div className="container text-center  p-2">
          {props.title}
          Experiment No. 5 Title: Study of multiplexer
          </div>

          <div className="container p-3">
          {props.aim}
            Aim: To Study multiplexer
          </div>

          <div className="container p-3">
          {props.apparatus}
            Apparatus: Power Supply, multimeter, (IC 74150 , 74154) & Wires.
          </div>

          <div className="container p-3">
          {props.theory}
          Theory: Multiplexer:

          Multiplexer is the circuit which has many inputs and only one output. It is 24 pin IC.
          By applying control signals we can steer any I/P to the o/p. The mux has n I/P signals, M
          
          control signals and one a/p signal. Here, we consider 16.1 multiplexer which has 16 1/P bits,
          4 contro] bits and o/P bit.
          
          These data selector/mux contain full on chip decoding to select the desired data source.
          IC74150 selects one of 16 data sources. it has strobes input which is low logic level to enable this device.
          high level at strobe forces the output high and the Y output is low. it has an inverted output only.
          it for forms parallel to series conversion. 
          It permits multiplexing from N lines to 1 line. Typical average propagation delay time, data input to W output is 11n second.
          Typical power dissipation is 200 nw
          </div>

          <div className="container p-3">
          {props.procedure}
          Procedure :
          1. Make the connections as per pin out diagram of IC 74150.
          2. Apply supply to circuit as pin24 to Vec and pin 12 to ground.
          3. Apply control bits to pins 11, 13, 14, 15 and as per this supply input to any
          one of the D0 to D15.
          4. Note down the output voltage by multimeter.
          5. Verify the truth table.  
          </div>

          <div className="container p-3">
          {props.images}
          </div>

          <div className="container p-3">
          {props.conclusion}
          Conclusion :
          Thus we verified the multiplexer with 16 inputs and output using IC 74150.
          
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

export default Experiment5;
