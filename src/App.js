import logo from './logo.svg';
import './App.css';
//importer les compsant de react-bootstrap
import {Card, Button} from 'react-bootstrap';
// Importer mes composants
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';


const userName = prompt('veillez saisir votre prenom!')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First <code>project</code> with react.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className='card'>
      <Card style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title>Produit</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Acheter</Button>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px' }}>
        {userName ? (
          <>
            <p>Bonjour, {userName} !</p>
            <img src="./photo.png" alt="mon-profil" style={{height: '50px', width: '50px'}} />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
      </div>
    </div>



  );
}

export default App;
