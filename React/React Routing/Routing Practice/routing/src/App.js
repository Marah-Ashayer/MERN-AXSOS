import { Router } from '@reach/router';
import './App.css';
import Routing from './components/Routing';
import Styling from './components/Styling';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Router>
        <Routing path="/home"/>
        <Word path="/:word"/>
        <Styling path="/:word/:col1/:col2"/>
      </Router>
    </div>
  );
}

export default App;
