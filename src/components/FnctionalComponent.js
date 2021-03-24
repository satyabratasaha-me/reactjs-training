import React, { useState } from 'react';
import Label from './Label';



const FunctionalComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementHanler = (event, counter) =>{
        setCounter((counter)=>{
            return(
                counter + 1
            )
        })
        console.log(`clicked `, counter)
    }

    const resetHandler =  () => {
        setCounter(()=>{
            return 0
        })
    }

    return(
        <React.Fragment>
            {/* <h3>Clicked {counter} times</h3> */}
            <Label counter = {counter}></Label>
            <button onClick={(event)=>incrementHanler(event,counter)}>Increment</button>
            <button onClick={(event)=>resetHandler(event)}>Reset</button>
        </React.Fragment>
    )
}

export default FunctionalComponent