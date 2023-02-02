import { useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeContext } from '../App';

export default function ExampleNavbar({ setAccessibility }) {
   
    const accessibility = useContext(ThemeContext);
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <h1 className='text-warning'>Véletlenszerű idézetek, híres emberektől...</h1>
            </Nav>
            <Nav>
              <Nav.Link >
                <i className="fa-solid fa-wheelchair fa-xl text-warning mx-2" onClick={() => { setAccessibility(!accessibility) }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }