import React, {Component} from 'react'

const enhancedTable = (OriginalComponent,data) => {

    class EnhancedComponent extends Component {

        constructor(props){
            super(props);
            this.state = {
                'items': [],
                'headers' : []
            }
        }


        fetchHandler = () => {
            this.setState({
                    'items': data().items,
                    'headers' : data().headers
                })
        }

        clearHandler = () => {
            this.setState({
                'items' : [],
                'headers' : []
            })
        }

    

        render(){
            const headers = this.state.headers.map((header,index) => {
                return(
                    <th key={index}>{header}</th>
                )
            })
            return(
                <div style={{padding:'50px'}}>
                    <button onClick={this.fetchHandler.bind(this)}>Fetch</button>
                    <button onClick={this.clearHandler.bind(this)}>Clear</button>
                    <OriginalComponent header={headers} item={this.state.items}></OriginalComponent>
                </div>
            )

        }

    }

    return EnhancedComponent;

}

export default enhancedTable;
