import { useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../App';

export default function ExampleNavbar({ setAccessibility }) {
   
    const accessibility = useContext(ThemeContext);
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex mx-5">
  
                <Form.Label>
                  <div>
                    <label htmlFor='inputSearch' className='text-warning fs-4 mx-3'><b>Keresnék!</b></label>
                  </div>
                </Form.Label>
  
                <Form.Control
                  id='inputSearch'
                  type="search"
                  validated="false"
                  placeholder="Keresés"
                  className="me-2 bg-warning"
                  aria-label="Search"
                  tabIndex={1}
                />
  
                <Button variant="outline-warning" tabIndex={2}>Search</Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link tabIndex={6}>
                <i className="fa-solid fa-pen fa-lg text-warning mx-2"></i>
              </Nav.Link>
              <Nav.Link tabIndex={5}>
                <i className="fa-solid fa-bell fa-lg text-warning mx-2"></i>
              </Nav.Link>
              <Nav.Link tabIndex={4}>
                <i className="fa-solid fa-user fa-lg text-warning mx-2"></i>
              </Nav.Link>
              <Nav.Link tabIndex={3}>
                <i className="fa-solid fa-wheelchair fa-lg text-warning mx-2" onClick={() => { setAccessibility(!accessibility) }}></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }