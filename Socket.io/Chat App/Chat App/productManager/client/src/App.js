import React from 'react';
// import Main from './views/Main';
// import Create from './views/Create';
// import Update from './views/Update';
// import { Router } from '@reach/router';
import Chat from './components/Chat';
function App() {
  return (
    <div className="App">
      {/* <Router>
          <Main path="/" />
          <Create path="/new"/>
          <Update path="/edit/:id"/>
      </Router> */}
      <Chat/>
    </div>
  );
}
export default App;

