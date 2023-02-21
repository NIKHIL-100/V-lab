import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import image1 from '../Images/exp5(2).obstable.jpg'
import "./Cards.css"

function Cards() {
  return (
    <>
    <div className='exp__img  text-center ' id='Experiments' style={{paddingTop:"4rem", paddingBottom:"5rem"}}>
    <h1 className='pb-2 '> <u>Experiments</u></h1>
      <div className='container  exp__bg   border rounded '  >
      <div className=' row  my-3 ' >

      {/*first card shadow is different than other cards = <Card className='border  shadow'></Card> */}
        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> 
        <Card  style={{ height: '25rem' }}>
          <Card.Img  variant="top" src={image1} />
          <div>
            <Card.Body className='p-2 '>
              <Card.Title>Experiment no 1</Card.Title>
             
              <Card.Text>
            <p className='mb-0'>Title: Study of TTL gates</p>  
            Aim: To verify truth table of various gates
              </Card.Text>
              <Link to={"/exp1"}>
                <Button variant="primary" path="Experiment1.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> 
        <Card  style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2 '>
              <Card.Title>Experiment no 2</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of Universal gatess</p>  
              Aim: To verify truth table of various universal gates
              </Card.Text>
              <Link to={"/exp2"}>
                <Button variant="primary" path="Experiment2.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 3</Card.Title>
              <Card.Text >
              <p className='mb-0'>Title: Study of De-Morgan's Theorem & Duality Theorem</p>  
              {/*Aim: To study De-Morgan's Theorem & Duality Theorem */}
              </Card.Text>
              <Link to={"/exp3"}>
                <Button variant="primary" path="Experiment3.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 4</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of Half Adder and Full Adder</p>  
              Aim: To Study Half Adder and Full Adder
              </Card.Text>
              <Link to={"/exp4"}>
                <Button variant="primary" path="Experiment4.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 5</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of multiplexer</p>  
              Aim: To Study multiplexer
              </Card.Text>
              <Link to={"/exp5"}>
                <Button variant="primary" path="Experiment5.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 6</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of Demultiplexer</p>  
              Aim: To Study Demultiplexer
              </Card.Text>
              <Link to={"/exp6"}>
                <Button variant="primary" path="Experiment6.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top"  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 7</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of decade counter using IC7490 and observe the counting sequence</p>  
              {/*Aim: To Study decade counter using IC7490 and observe the counting sequence */}
              </Card.Text>
              <Link to={"/exp7"}>
                <Button variant="primary" path="Experiment7.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>

        <div className='col-12 col-sm-6 col-md-4 p-5 py-4'> <Card style={{ height: '25rem' }}>
          <Card.Img variant="top "  src={image1} />
          <div>
            <Card.Body className='p-2   '>
              <Card.Title>Experiment no 8</Card.Title>
              <Card.Text>
              <p className='mb-0'>Title: Study of Flip-flops</p>  
              Aim: To Study D Flip Flop and JK Flip Flop
              </Card.Text>
              <Link to={"/exp8"}>
                <Button variant="primary" path="Experiment8.js">View More</Button>
              </Link>
            </Card.Body>
          </div>
        </Card>
        </div>




        </div>
      </div>

      </div>
    </>
  );
}

export default Cards;