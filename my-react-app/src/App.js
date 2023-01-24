import './App.css';
import { useState, createContext, useContext } from 'react'
/* import MainExample from './components/main'; */
/* import CollapsibleExample from './components/navbar'; */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ThemeContext = createContext();

function App() {

  const [isAccessibility, setAccessibility] = useState(false);

  return (
    <div className="App" style={{backgroundColor: "#504949"}}>
      <ThemeContext.Provider value={isAccessibility}>
        <nav>
          <CollapsibleExample changeState={setAccessibility} state={isAccessibility}/>
        </nav>
        <main className='p-1 container-fluid'>
          <div className='d-flex flex-wrap justify-content-evenly'>
          <div><MainExample/></div>
          <div><MainExample/></div>
          <div><MainExample/></div>
          <div><MainExample/></div>
          <div><MainExample/></div>
          <div><MainExample/></div>
          </div>
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

function CollapsibleExample(props) {
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

function MainExample() {

  const accessibility = useContext(ThemeContext);

  return (
    <div className='m-2'>
      <Card style={{ width: '25rem' }}>
        <Card.Body className={accessibility ? "bg-dark" : "bg-light"}>
          <Card.Title className={accessibility ? "text-warning" : "text-dark"}>Card Title</Card.Title>
          <Card.Text className={accessibility ? "text-warning" : "text-dark"}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='d-flex justify-content-start'>
          <Button className={accessibility ? "btn-warning" : "btn-primary"} >Get Started<i className="fa-solid fa-arrow-right px-1"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}


export default App;
