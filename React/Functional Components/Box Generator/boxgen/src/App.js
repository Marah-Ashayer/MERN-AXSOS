import './App.css';
import BoxForm from './components/BoxForm';
import Creat from './components/Creat';
import React, { useState } from  'react';

function App() {
      const [allcolors , setAllColors]=useState([]);
      return(
        <>
        <BoxForm fun={setAllColors} />
        <Creat data = {allcolors}/>
      
      </>
      );

}

export default App;
