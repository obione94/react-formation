import logo from './logo.svg';
import './App.css';
import DisplayTimer from './DisplayTimer';
import SayHello from './SayHello'
import { useState } from 'react';
import ListPost from './Post/ListPost';
import TestsEffect from './TestsEffect';
import Content from './Content';
//en react  1 composant =  1 function
function App() {
  let [firstName, setFirstName] = useState("titi");
  let [counter, setCounter] = useState(1);

  let [toggle, setToggle] = useState(true);

  let [heure, setHeure] = useState((new Date()).toLocaleString());

  const majHeure = function() {
    setHeure((new Date()).toLocaleString())
  }
   
  const changeName = function() {
    setFirstName("TOTORO");
  };

  return (
    <div className="App">
      <div className="App">salut toto !!!</div>
      <div>-------------------------------</div>
      <div>
        <DisplayTimer name={firstName} heure={heure} date="regre"></DisplayTimer>
        <button onClick={changeName}>je change le nom</button>
        <button onClick={()=> majHeure()}>maj heure</button>
      </div>
<     div>-------------------------------</div>
      <div>
        <button onClick={()=> setCounter(counter - 1)}>moins</button>
        <span>{counter}</span>
        <button onClick={()=> setCounter(counter + 1)}>plus</button>
      </div>
      <div>-------------------------------</div>
      
      <SayHello>
        <div>
          <p>coucou</p>
        </div>
      </SayHello>

      <div>-------------------------------</div>

      <ListPost></ListPost>
      
      <button onClick={()=> setToggle(false)}>sup</button>
      {toggle && <TestsEffect/>}

      <Content></Content>


    </div>
  );
}

export default App;
