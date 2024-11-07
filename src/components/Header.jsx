import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
              <Navbar bg="dark" data-bs-theme="dark" className="shadow-lg">
        <Container>
<Link to={'/'} className='text-decoration-none'>
              <Navbar.Brand href="#home" className='ms-2'>
              <FontAwesomeIcon icon={faStackOverflow} style={{color:'white',marginRight:'1rem'}}/>
    
                Project Fair</Navbar.Brand>
</Link>
<button className='btn btn-warning ms-auto rounded-0'>
  <FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout
</button>
         
        </Container>
      </Navbar>
    </div>
  )
}

export default Header