import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    // jsx
    <>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={6} sm={12}>
            <h2>Welcome to <span className='text-warning'>Media Player</span> </h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur consequuntur similique maiores dicta est sequi nobis culpa aspernatur optio voluptatem ratione animi ullam, quasi aperiam quibusdam. Illum, placeat facilis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse error sint rerum perspiciatis excepturi quae aspernatur eius, vel tempora necessitatibus placeat, similique fugiat temporibus cumque. Culpa impedit recusandae optio?</p>
           <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col md={6} sm={12} className='d-flex justify-content-center'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no-img" className='w-50' />
          </Col>
        </Row>
      </Container>

      <div className='container-fluid mt-5'>
        <div className='row mt-5'>
    <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='row'>
            <h4 className='text-center my-5'>Features</h4>
             <div className='col-md-4'>
                      <Card style={{ width: '100%' }}>
                        <Card.Img className='w-100 p-3' variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" style={{height:'300px'}}/>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </div>
                   
                 <div className='col-md-4 mt-4 mt-md-0'>
                        <Card style={{ width: '100%' }}>
                          <Card.Img className='p-3' variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" style={{height:'300px'}}/>
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                 </div>
                    <div className='col-md-4  mt-4 mt-md-0'>
                      <Card style={{ width: '100%'}}>
                          <Card.Img className='p-3' variant="top" src="https://media.tenor.com/LLlSFiqwJGMAAAAM/beating-heart-gif.gif" style={{height:'300px'}} />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>
                    
             </div>
           
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      
<div className="container-fluid mt-5">
<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-10 border">
    <div className="container p-3">
      <div className="row">
        <div className="col-md-6">
          <h3 className='text-warning mt-4'>Simple fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span>  : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt adipisci modi dolore delectus possimus hic! Exercitationem quae necessitatibus, odio vero accusantium cumque nam nulla nobis magni fugiat qui est.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt adipisci modi dolore delectus possimus hic! Exercitationem quae necessitatibus, odio vero accusantium cumque nam nulla nobis magni fugiat qui est.</p>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything </span>:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt adipisci modi dolore delectus possimus hic! Exercitationem quae necessitatibus, odio vero accusantium cumque nam nulla nobis magni fugiat qui est.</p>
        </div>
        <div className="col-md-6">
        <iframe width="500" height="500" src="https://www.youtube.com/embed/roz9sXFkTuE?si=Vpzy2EXzuBNBXIFB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-1"></div>
</div>
</div>

    </>
  )
}

export default Landing