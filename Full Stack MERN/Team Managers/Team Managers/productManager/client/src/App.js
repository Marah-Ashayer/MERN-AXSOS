import React from 'react';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import { Router } from '@reach/router';
import {Link} from '@reach/router';
import './App.css';

function App() {
  const style1={
    marginTop:'3%',
    fontSize : '23px',
    fontFamily :'cursive',
  }
  return (
    <div className="App" >
      <div style={style1}>
      <Link  to ={"/"}>Manage Players</Link>| <Link to={"/status"}>Manage Player Status</Link>
      <p><Link to={"/"}>List</Link>|<Link to={"/new"}>Add Player</Link></p>
      </div>
      
      <Router>
          <Main path="/" />
          <Create path="/new"/>
          <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}
export default App;

