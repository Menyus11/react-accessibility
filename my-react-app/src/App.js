import './App.css';
import { useState, createContext, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const ThemeContext = createContext();
const ArrayContext = createContext();

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
    <ThemeContext.Provider value={isAccessibility}>
      <div className="App" style={{ backgroundColor: "#2596be" }}>
        <header>
          <h1 className="text-dark">Változó idézetek, híres emberektől.</h1>
        </header>
        <nav>
          <ExampleNavbar setAccessibility={setAccessibility}/>
        </nav>
        <main className='p-3'>
          <ArrayContext.Provider value={quotesArray}>
            <MainExample/>
          </ArrayContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

function ExampleNavbar({setAccessibility}) {

  const accessibility = useContext(ThemeContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home" className='text-warning'>Carbon Cloud Dashboard</Navbar.Brand> */}
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
              tabIndex={1}
                id='inputSearch'
                type="search"
                validated="false"
                placeholder="Keresés"
                className="me-2 bg-warning"
                aria-label="Search"
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

function MainExample() {
  const accessibility = useContext(ThemeContext);
  const quotesArrayNow = useContext(ArrayContext);

  let quotesNow = [];

  for (let i = 0; i < 20; i++) {
    quotesNow.push(quotesArrayNow[Math.floor(Math.random() * quotesArrayNow.length)]);
  }

  return (
    <div className=' d-flex flex-wrap justify-content-around'>
      {quotesNow.map((quoteNow, index) =>
        <div className='my-3' key={index}>
          <Card style={{ height: '12rem', width: quoteNow?.text.length < 100 ? '20rem' : '30rem' }} className="rounded-5">
            <Card.Body className={accessibility ? "rounded-5 bg-dark" : "rounded-5 bg-light"}>
              <Card.Title className={accessibility ? "text-warning" : "text-dark"}>{quoteNow?.author === null ? "Ismeretlen szerző" : quoteNow?.author}</Card.Title>
              <Card.Text className={accessibility ? "text-warning" : "text-dark"}>
                {quoteNow?.text}
              </Card.Text>
              <div className='d-flex justify-content-start'>
                <a href='https://pakwired.com/100-best-quotes-time'>
                  <Button className={accessibility ? "btn-warning" : "btn-primary"} tabIndex={index + 7} >Érdekel<i className="fa-solid fa-arrow-right px-1"></i></Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App;