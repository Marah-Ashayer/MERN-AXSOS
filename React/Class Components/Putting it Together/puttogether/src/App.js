import './App.css';

import SomeClassComponent from './components/SomeClassComponent';

function App() {
  return (
    <div className="App">
        <SomeClassComponent firstName={"Jane"}   lastName={"Doe"}  age={45}  hairColor= {"Black"}/>
        <SomeClassComponent firstName={"Smoth"}   lastName={"Jhon"}  age={88}  hairColor= {"Brown"}/>
        <SomeClassComponent firstName={"Fillmore"}   lastName={"Millard"}  age={50}  hairColor= {"Brown"}/>
        <SomeClassComponent firstName={"Smith"}   lastName={"Maria"}  age={62}  hairColor= {"Brown"}/>
    </div>
  );
}

export default App;

