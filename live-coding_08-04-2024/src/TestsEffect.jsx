import { useEffect, useState } from "react";

const TestsEffect =  function () 
{

    const [counter, setCounter] = useState(1);

    useEffect(
        ()=>{ 
            return() => (console.log("TestsEffect"));
        },[]
    );
   
    return(

        <div>
            <button onClick={()=> setCounter(counter - 1)}>moins</button>
            <span>{counter}</span>
            <button onClick={()=> setCounter(counter + 1)}>plus</button>
        </div>
    ) ;

};

export default TestsEffect;