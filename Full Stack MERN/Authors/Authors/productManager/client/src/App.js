import React from 'react';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/" />
          <Create path="/new"/>
          <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}
export default App;

