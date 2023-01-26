import './App.css';
import { useState, createContext, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ThemeContext = createContext();

function App() {

  const [isAccessibility, setAccessibility] = useState(false);
  const [quotesArray, setQuotesArray] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotesArray(json);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#504949" }}>
      <ThemeContext.Provider value={isAccessibility}>
        <nav>
          <ExampleNavbar changeState={setAccessibility} state={isAccessibility} />
        </nav>
        <main className='p-3'>
          <MainExample quotesArray={quotesArray} />
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

function ExampleNavbar(props) {
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
              <i className="fa-solid fa-wheelchair fa-lg text-warning mx-2" onClick={() => { props.changeState(!props.state) }}></i>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function MainExample(props) {

  const accessibility = useContext(ThemeContext);

  let quotesNow = [];

 
    for (let i = 0; i < 20; i++) {
      quotesNow.push(props.quotesArray[Math.floor(Math.random() * props.quotesArray.length)]);
  }

  return (
    <div className=' d-flex flex-wrap justify-content-around'>
      {quotesNow.map((quoteNow, index) =>
        <div className='m-2' key={index}>
          <Card style={{ height: '12rem', width: quoteNow?.text.length < 100 ? '20rem' : '30rem'}}>
            <Card.Body className={accessibility ? "bg-dark" : "bg-light"}>
              <Card.Title className={accessibility ? "text-warning" : "text-dark"}>{quoteNow?.author === null ? "Ismeretlen szerző": quoteNow?.author}</Card.Title>
              <Card.Text className={accessibility ? "text-warning" : "text-dark"}>
                {quoteNow?.text}
              </Card.Text>
              <div className='d-flex justify-content-start'>
                <Button className={accessibility ? "btn-warning" : "btn-primary"} >Érdekel<i className="fa-solid fa-arrow-right px-1"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}



export default App;