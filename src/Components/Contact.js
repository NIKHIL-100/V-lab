import React from 'react';

const Contact = () => {
  return (
    <div className='pt-5 ' id='Contact'>
    <h1 className='text-center  m-4 pb-5'><u>CONTACT</u></h1> 
    <div className='container mt-5 pt-5 d-flex justify-content-around'>
        <div><a href=""> <img  src='https://cdn-icons-png.flaticon.com/512/5968/5968534.png'  style={{height:"5rem" }}/> </a> <h5 className='text-center'>G-mail</h5> </div>
        
        <div>
        <a target="_blank" href="/Components/Exp1.js" ><img src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' style={{height:"5rem" }}/></a>
        <h5 className='text-center'>Github</h5>
       </div>
        <div>
        <a target="_blank" href=''><img src='https://cdn-icons-png.flaticon.com/512/3992/3992606.png' style={{height:"5rem" }}/></a>
        <h5 className='text-center'>Linkedin</h5>
        </div>
        <div>
        <a  target="_blank" href=''><img src='https://cdn-icons-png.flaticon.com/512/724/724664.png' style={{height:"5rem" }}/></a>
        <h5 className='text-center'>Mobile</h5>
        </div>
        <div>          
        <a target="_blank" href=''> <img src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' style={{height:"5rem"}}/></a>
        <h5 className='text-center'>Instagram</h5>
        </div>

    </div>

    <div className='container mb-5 p-5'>
        <p className='text-center pt-5'><b><u>This is a open source website</u></b> </p>
        <p className='text-center pb-5'><b><u>For more information Contact us by clicking on the above icons  </u></b> </p>
    </div>
    </div>
  );
}

export default Contact;