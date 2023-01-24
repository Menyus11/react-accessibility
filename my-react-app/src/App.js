import './App.css';
import { useState, createContext, useEffect} from 'react'
import MainExample from './components/main';
import NavBarExample from './components/navbar';

const ThemeContext = createContext();

function App() {

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
      });
  }, []);


  const [isAccessibility, setAccessibility] = useState(false);

  return (
    <div className="App" style={{backgroundColor: "#504949"}}>
      <ThemeContext.Provider value={isAccessibility}>
        <nav>
          <NavBarExample changeState={setAccessibility} state={isAccessibility}/>
        </nav>
        <main className='p-1 container-fluid'>
          <div className='d-flex flex-wrap justify-content-evenly'>
          <MainExample ThemeContext={ThemeContext} quotes={quotes}/>

          </div>
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
