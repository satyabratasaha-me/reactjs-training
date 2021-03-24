import React, { Component } from 'react'

class ClassLabel extends Component {
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log('*****************')
    }

    render(){
        return(
            <h3>Counter is {this.props.counter}</h3>
        )
    }
}
export default ClassLabel