import React from 'react'
import Experiments from './Experiments'

const Simulation = () => {
  return (
    
    <div>
  {/*
    <iframe width="725" height="453" title='andGate' src="https://www.tinkercad.com/embed/hzFMfQH9PqU?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no">AND Gate</iframe>

    <iframe width="725" height="453" title='andGate' src="https://wokwi.com/projects/353901260885614593" frameborder="0" marginwidth="0" marginheight="0" scrolling="no">AND Gate</iframe>
  */}



  {/*
  <div
  class="embed-responsive embed-responsive-21by9 "
  className="container w-100 d-flex justify-content-center p-0  position-relative"
>
  <iframe  width="725" height="453" title='andGate' frameborder="0" marginwidth="0" marginheight="0" scrolling="no"
    class="embed-responsive-item"
    src="https://www.tinkercad.com/embed/hzFMfQH9PqU?editbtn=1"
    allowfullscreen
  ></iframe>
</div>
*/}

<Experiments eid="exp3"

title="asdfghjkl"
aim="qwertyuiopasdfghjk"
apparatus="ufgcnb "
theory="
as NOR gate.
Procedure:

1) Connect circuit as shown in circuit diagram.

2) Apply the supply to circuit as pin 14 to +VCC & pin 7 to ground.
3) Note down the o/p voltage by multimeter.

4) Verify the truth table by observed readings.

Conclusion: . . |
Thus we obtained basic logic gates using universal NAND and NOR gates and
verified the truth table.
"

simsrc="https://www.tinkercad.com/embed/hzFMfQH9PqU?editbtn=1"
/>





<Experiments 
eid="exp2"
title="Experiment No, 2
pie Study of universal gates using IC 7400 & IC 7402."
aim="Aim: To verify the truth table of IC 7400 & 7402"
apparatus="Apparatus: Power Supply, multimeter Bread Boatd, (IC 7400, 7402) & Wires."
theory="Theory:

1. NOR as Universal gate:
a. NOR as NOT

When 2 i/p of NOR ¢ gate are shorted then. we get NOT. It has the same truth
table as that of inverter itself.

 

b. NORas OR

When the NOR gate is connected to NOR gate with both i/p shorted, we get
OR gate & it has o/p as Y=A+B

A
B

YxA+B"
simsrc="https://www.tinkercad.com/embed/hzFMfQH9PqU?editbtn=1"
/>












    </div>
    
  )
}

export default Simulation