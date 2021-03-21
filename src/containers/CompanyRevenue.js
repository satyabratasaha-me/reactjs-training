import React, {Component} from 'react'
import TableComponent from '../components/Table'

class CompanyRevenue extends Component {

    constructor(props){
        super(props);
        this.state = {
            'headers' : ['Company', 'Revenue(USD)'],
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
            ]
        }
    }

    

    render(){

        const headers =  this.state.headers.map(header => {
            return(
                <th>{header}</th>
            )
        })
    
        const items = this.state.items.map(item => {
            return(
                <tr>
                    <td>{item.Company}</td>
                    <td>{item["Revenue(USD)"]}</td>
                </tr>
            )
        })
        

        return(
            <TableComponent headers={headers} items={items}></TableComponent>
        )

    }


}

export default CompanyRevenue;