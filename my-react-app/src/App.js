import './App.css';
import { useState, createContext, useContext, useEffect } from 'react'
/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import ExampleNavbar from './components/navbar';

const ThemeContext = createContext();
const ArrayContext = createContext();
export {ThemeContext};

function App() {

  const [isAccessibility, setAccessibility] = useState(false);
  const [quotesArray, setQuotesArray] = useState([]);

  useEffect(() => {

    const randomArrayNow = [];

    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < 30; i++) {
          randomArrayNow.push(json[Math.floor(Math.random() * json.length)]);
        }
        setQuotesArray(randomArrayNow);
      });
  }, []);

  return (
    <ThemeContext.Provider value={isAccessibility}>
      <div className="App container-fluid" style={{ backgroundColor: "#2596be" }}>
        <header>
          <h1 className="text-dark">Változó idézetek, híres emberektől.</h1>
        </header>
        <nav>
          <ExampleNavbar setAccessibility={setAccessibility} />
        </nav>
        <main className='p-3'>
          <ArrayContext.Provider value={quotesArray}>
            <MainExample />
          </ArrayContext.Provider>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

function MainExample() {
  const accessibility = useContext(ThemeContext);
  const quotesArray = useContext(ArrayContext);

  return (
    <div className=' d-flex flex-wrap justify-content-evenly'>
      {quotesArray.map((quoteNow, index) =>
        <div className='my-3' key={index}>
          <Card style={{ height: '10rem', width: quoteNow?.text.length < 100 ? '20rem' : '30rem' }} className="rounded-2">
            <Card.Body className={accessibility ? "rounded-2 bg-dark" : "rounded-2 bg-light"}>
              <Card.Title className={accessibility ? "text-warning pb-3" : "text-dark pb-3"}>{quoteNow?.author === null ? "Ismeretlen szerző" : quoteNow?.author}</Card.Title>
              <Card.Text className={accessibility ? "text-warning " : "text-dark"}>
                {quoteNow?.text}
              </Card.Text>
{/*               <div className='d-flex justify-content-start'>
                <a href='https://pakwired.com/100-best-quotes-time'>
                  <Button className={accessibility ? "btn-warning" : "btn-primary"} >Érdekel<i className="fa-solid fa-arrow-right px-1"></i></Button>
                </a>
              </div> */}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App;