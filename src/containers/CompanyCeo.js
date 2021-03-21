import React, {Component} from 'react'
import TableComponent from '../components/Table'

class CompanyCeo extends Component {

    constructor(props){
        super(props);
        this.state = {
            'items': [],
            'headers' : ['Emp. ID','Emp.Name','Company']
        }
    }

    fetchHandler = () => {
        this.setState({
            'items':[
                {
                    'Emp. ID' : 'U1234',
                    'Emp. Name' : 'Tim Cook',
                    'Company' : 'Apple'
                },
                {
                    'Emp. ID' : 'U1235',
                    'Emp. Name' : 'Sundar Pichai',
                    'Company' : 'Google'
                },
                {
                    'Emp. ID' : 'U1236',
                    'Emp. Name' : 'Jeff Bezos',
                    'Company' : 'Amazon'
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
                    <td>{item["Emp. ID"]}</td>
                    <td>{item["Emp. Name"]}</td>
                    <td>{item.Company}</td>
                </tr>
            )
        })
        
        return(
            <div>
                <button onClick={this.fetchHandler.bind(this)}>Fetch</button>
                <button onClick={this.clearHandler.bind(this)}>Clear</button>
                <TableComponent headers={headers} items={items}>Company CEO</TableComponent>
            </div>
        )

    }


}

export default CompanyCeo;