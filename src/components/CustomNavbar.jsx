import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link>
              <Link to='/'>Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to='about'>About</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to='products'>Products</Link>
            </Nav.Link> */}

          <nav>
            <NavLink className='mx-3' to='/'>Home</NavLink>
            <NavLink className='mx-3'to='about'>About</NavLink>
            <NavLink className='mx-3' to='products'>Products</NavLink>
          </nav>
            
            
        
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;