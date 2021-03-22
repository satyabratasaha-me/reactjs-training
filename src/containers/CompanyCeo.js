import React, {Component} from 'react'
import TableComponent from '../components/Table'
import enhancedTable from '../hoc/enhancedTable'
import {getCompanyCeo} from '../data/data'

class CompanyCeo extends Component {

    render(){

        const {header,item} = this.props


    
        const items = item.map((item,index) => {
            return(
                <tr key = {index}>
                    <td>{item["Emp. ID"]}</td>
                    <td>{item["Emp. Name"]}</td>
                    <td>{item.Company}</td>
                </tr>
            )
        })

        
        
        return(
                <TableComponent headers={header} items={items}>Company CEO</TableComponent>
        )

    }


}

export default enhancedTable(CompanyCeo, getCompanyCeo);

