import React, { Component } from 'react'


class ClassComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            'counter' : 0
        }
    }

    incrementHandler = (counter) => {
        this.setState({
            'counter' : counter + 1
        })
        console.log(this.state.counter)
    }

    resetHandler = () => {
        this.setState({
            counter: 0
        })
    }

    render(){
        return(
            <React.Fragment>
                <h3>Clicked {this.state.counter} times</h3>
                <button style= {{color:'blue'}} onClick={this.incrementHandler.bind(this,this.state.counter)}>Increment</button>
                <button style= {{color:'red'}} onClick={this.resetHandler.bind(this)}>Reset</button>
            </React.Fragment>
        )
    }
}


export default ClassComponent