/* import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MainExample(props) {

    let quotesArray = [];
    for(let i=0 ; i<20; i++ ) {
        quotesArray.push(props.quotes[Math.floor(Math.random() * props.quotes.length)]);
    }

  const accessibility = useContext(props.ThemeContext);

  return (
    <div>
{quotesArray.map( (quoteNow, index) => 
    <div className='m-2' key={index}>
        
      <Card style={{ width: '25rem' }}>
        <Card.Body className={accessibility ? "bg-dark" : "bg-light"}>
          <Card.Title className={accessibility ? "text-warning" : "text-dark"}>{quoteNow?.author}</Card.Title>
          <Card.Text className={accessibility ? "text-warning" : "text-dark"}>
            {quoteNow?.text}
          </Card.Text>
          <div className='d-flex justify-content-start'>
          <Button className={accessibility ? "btn-warning" : "btn-primary"} >Get Started<i className="fa-solid fa-arrow-right px-1"></i></Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
)}
    </div>
  )
}
 */