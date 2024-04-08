import logo from './logo.svg';
import './App.css';
import DisplayTimer from './DisplayTimer';
import SayHello from './SayHello'
import { useState } from 'react';

const heure = function() {
   return( 
    <p>`{(new Date()).toLocaleString()}`</p>
   );
};



//en react  1 composant =  1 function
function App() {
  let [firstName, setFirstName] = useState("titi");
  let [counter, setCounter] = useState(1);

  const changeName = function() {
    setFirstName("totoro");
  };
  return (
    <div className="App">
      <div className="App">salut toto !!!</div>
      <DisplayTimer name={firstName} heure={heure} date="regre"></DisplayTimer>
      <button onClick={changeName}>je change le nom</button>
        -----------------------

        <div>
          <button onClick={()=> setCounter(counter - 1)}>moins</button>
          <span>{counter}</span>
          <button onClick={()=> setCounter(counter + 1)}>plus</button>
        </div>
        
        <SayHello></SayHello>

    </div>
  );
}

export default App;
