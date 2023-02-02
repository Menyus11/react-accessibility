import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { ThemeContext, ArrayContext } from '../App';

export default function MainExample() {
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
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    )
  }