import React from 'react';

const Contact = () => {
  return (
    <div className='pt-5 ' id='Contact'>
      <h1 className='text-center  m-4 pb-5'><u>CONTACT</u></h1>
      <div className='mt-5 pt-5 row justify-content-sm-center'>
        <div className='p-3 col-4 col-sm-3 col-md-1 text-center'><a href="https://www.gmail.com" target="_blank" rel="noreferrer"> <img src='https://cdn-icons-png.flaticon.com/512/5968/5968534.png' alt='im1' className='w-75 h-75' />
        </a> <h5 className='text-center'>G-mail</h5> </div>

        <div className='p-3 col-4 col-sm-3 col-md-1 text-center'>
          <a  href="https://www.gmail.com" target="_blank" rel="noreferrer" ><img src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt ='img2' className='w-75 h-75' /></a>
          <h5 className='text-center'>Github</h5>
        </div>
        <div className='p-3 col-4 col-sm-3 col-md-1 text-center'>
          <a href="https://www.gmail.com" target="_blank" rel="noreferrer" ><img src='https://cdn-icons-png.flaticon.com/512/3992/3992606.png' alt ='img3' className='w-75 h-75' /></a>
          <h5 className='text-center'>Linkedin</h5>
        </div>

        <div className='p-3 col-2 d-sm-none'></div>
        <div className='p-3 col-4 col-sm-3 col-md-1 text-center'>

          <a href="https://www.gmail.com" target="_blank" rel="noreferrer" ><img src='https://cdn-icons-png.flaticon.com/512/724/724664.png' alt ='img4' className='w-75 h-75' /></a>
          <h5 className='text-center'>Mobile</h5>
        </div>
        {/* */}

        <div className='p-3 col-4 col-sm-3 col-md-1 text-center'>
          <a href="https://www.gmail.com" target="_blank" rel="noreferrer" > <img src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' alt ='img5' className='w-75 h-75' /></a>
          <h5 className='text-center'>Instagram</h5>
        </div>

      </div>

      <div className='container mb-5 p-5'>
        <p className='text-center pt-5'><b><u>This is a open source website</u></b> </p>
        <p className='text-center pb-5'><b><u>For more information Contact us by clicking on the above icons  </u></b> </p>
      </div>
    </div >
  );
}

export default Contact;