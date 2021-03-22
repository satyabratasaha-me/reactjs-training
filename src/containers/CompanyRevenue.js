import React, {Component} from 'react'
import TableComponent from '../components/Table'
import enhancedTable from '../hoc/enhancedTable'
import {getCompanyRevenue} from '../data/data'

class CompanyRevenue extends Component {
    

    render(){

        const {header,item} = this.props
    
        const items = item.map((item,index) => {
            return(
                <tr key = {index}>
                    <td>{item.Company}</td>
                    <td>{item["Revenue(USD)"]}</td>
                </tr>
            )
        })
        

        return(
            <TableComponent headers={header} items={items}>Company Revenue</TableComponent>

        )

    }


}

export default enhancedTable(CompanyRevenue,getCompanyRevenue);  