import './App.css';
import { useState, createContext, useEffect } from 'react'
import ExampleNavbar from './components/navbar';
import MainExample from './components/card';

const ThemeContext = createContext();
const ArrayContext = createContext();
export {ThemeContext};
export {ArrayContext};

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

export default App;