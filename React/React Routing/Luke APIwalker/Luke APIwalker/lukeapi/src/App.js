import { Router } from '@reach/router';
import './App.css';
import Luke from './components/Luke';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';


function App() {

  return (
    <div className='App'>
      <Luke/>
      <Router>
          <People path="/People/:id" />
          <Planets path="/Planets/:id" />
          <Starships path="/Starships/:id"/>
      </Router>

    </div>
  );
}

export default App;
