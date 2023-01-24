import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NavBarExample(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='text-warning'>Carbon Cloud Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex mx-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 bg-warning"
                aria-label="Search"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <i className="fa-solid fa-pen fa-lg text-warning mx-2"></i>
              <i className="fa-solid fa-bell fa-lg text-warning mx-2"></i>
              <i className="fa-solid fa-user fa-lg text-warning mx-2"></i>
              <i className="fa-solid fa-wheelchair fa-lg text-warning mx-2" onClick={ () => { props.changeState(!props.state)} }></i>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
