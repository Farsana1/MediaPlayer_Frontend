
import { faFacebook, faInstagram, faXTwitter, faWhatsapp , faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-5 px-3'>
   <div className='container-fluid'>
        <div className="row">
          <div className="col-md-4 mt-4 mt-md-0">
            <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat className='me-3'/> Media Player
            </h4>
            <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam temporibus laboriosam sint asperiores reprehenderit, veniam aliquid. Molestiae nihil cupiditate dignissimos a quasi. Obcaecati facere iste repellendus blanditiis, voluptatum atque.</p>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
           <div>
              <h4>Links</h4>
            
                <Link to={'/'}><p className='mt-3'>Landing Page</p></Link>
                  <Link to={'/home'}><p>Home Page</p></Link>
                 <Link to={'/watchhistory'}> <p>Watch History</p></Link>
             
              
           </div>
          </div>
          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
          <div>
            <h4>Guide</h4>
              <p className='mt-3'>React</p>
              <p>React bootstrap</p>
              <p>Bootswatch</p>
          </div>
         
          </div>
          <div className="col-md-4 px-md-5 mt-4 mt-md-0">
              <h4>Contact US</h4>
              <div className='d-flex mt-3'>
                <input type="text" placeholder='Email id'className='form-control'/>
                <button className='btn btn-warning rounded ms-3'>Subscribe</button>
          </div>
            
            <div className='d-flex justify-content-between mt-3'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
            </div>
          </div>
        </div>
   </div>
    </div>
  )
}

export default Footer