import React, { useState } from 'react'

export const Counter = () => {

    const [counter,setCounter] = useState(0)

    // const counter = 1;

    const incrementCounterHandler = (times) => {
        console.log(times)
        setCounter(()=>counter + 1)
    }

    const resetCounterHandler = () =>{
        setCounter(()=>{
            return 0;
        })
    }

    return(
        <React.Fragment>
            <h3>Counter is {counter}</h3>
            <button onClick={()=> incrementCounterHandler(counter)}>Increment Counter</button>
            <button onClick={()=> resetCounterHandler()}>Reset Counter</button>
        </React.Fragment>
    )

}