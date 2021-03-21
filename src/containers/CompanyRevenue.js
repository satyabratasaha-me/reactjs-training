import React, {Component} from 'react'
import TableComponent from '../components/Table'

class CompanyRevenue extends Component {

    constructor(props){
        super(props);
        this.state = {
            'headers' : ['Company', 'Revenue(USD)'],
            'items' : []
        }
    }

    fetchHandler = () => {
        this.setState({
            'items' : [
                {
                    'Company' : 'Apple',
                    'Revenue(USD)' : '$111.4 billion'
                },
                {
                    'Company' : 'Google',
                    'Revenue(USD)' : '$741 billion'
                },
                {
                    'Company' : 'Amazon',
                    'Revenue(USD)' : '$233 billion'
                }
            ],
        })
    }

    clearHandler = () => {
        this.setState({
            'items' : [],
        })
    }

    

    render(){

        const headers = this.state.headers.map((header,index) => {
            return(
                <th key={index}>{header}</th>
            )
        })
    
        const items = this.state.items.map((item,index) => {
            return(
                <tr key = {index}>
                    <td>{item.Company}</td>
                    <td>{item["Revenue(USD)"]}</td>
                </tr>
            )
        })
        

        return(
            <div style={{padding:'50px'}}>
                <button onClick={this.fetchHandler.bind(this)}>Fetch</button>
                <button onClick={this.clearHandler.bind(this)}>Clear</button>
                <TableComponent headers={headers} items={items}>Company Revenue</TableComponent>
            </div>
        )

    }


}

export default CompanyRevenue;