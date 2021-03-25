import React, { Component } from 'react'
import Button from './Button'

class DemoCounter extends Component{

    constructor(props){
        super(props)

        this.state = {
            'counter' : 0
        }
    }


    incrementHandler = (counter) => {
        this.setState({
            counter : counter + 1
        })
    }


    resetHandler = () => {
       this.setState({
           counter : 0
       })
    }

    
   


    render(){

        return(
            <React.Fragment>
                <div>Clicked {this.state.counter} times</div>
                <button onClick={this.incrementHandler.bind(this,this.state.counter)}>Increment</button>
                <button onClick={this.resetHandler.bind(this)}>Reset</button>
            </React.Fragment>
        )}
    }




export default DemoCounter