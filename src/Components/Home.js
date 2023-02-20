
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade  activeIndex={index} onSelect={handleSelect}  >
      <Carousel.Item>
        <img alt=''
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/abstract-gold-award-background-picture-id1321202914?b=1&k=20&m=1321202914&s=170667a&w=0&h=BZNEZJrEBcfjG7iMo92VGSwJTK-K1KRkwLtmU-_u_uM="
        />
        <Carousel.Caption className=' text-white' >
          <h3 >V-Lab</h3>
          <p>    
             Educational website for Students
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt=''
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI="
        />

        <Carousel.Caption className='text-white'>
          <h3>V-Lab</h3>
          <p>            
            Educational website for Students
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/solar-and-wind-power-picture-id1337173750?b=1&k=20&m=1337173750&s=170667a&w=0&h=aE09dF-kEVeM5fahyYB1sgR-Pp93_uuIY6py_gYfwkg="
          alt="Third slide"
        />

        <Carousel.Caption className='text-white'>
          <h3>V-Lab</h3>
          <p>
            Educational website for Students
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default Home;