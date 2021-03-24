import React, { Component } from 'react'
import ClassLabel from './ClassLabel'
import Label from './Label'


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

    componentDidMount(){
        console.log('Componnet Mounted')
        this.setState({
            'counter':3
        })
       
    }

    shouldComponentUpdate(){
        if (this.state.counter >= 9) {
            return false
        }
        else{
            return true
        }
    }

    componentWillUnmount(){
        console.log('CleanUp')
    }

    componentDidCatch(){

    }

    
    render(){
  
        console.log('Componnet Rendered')
        return(
            <React.Fragment>
                <ClassLabel counter = {this.state.counter}></ClassLabel>
                <button style= {{color:'blue'}} onClick={this.incrementHandler.bind(this,this.state.counter)}>Increment</button>
                <button style= {{color:'red'}} onClick={this.resetHandler.bind(this)}>Reset</button>
            </React.Fragment>
        )
    }
}


export default ClassComponent