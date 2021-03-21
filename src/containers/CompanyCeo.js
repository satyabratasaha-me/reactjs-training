import React, {Component} from 'react'

class CompanyCeo extends Component {

    constructor(props){
        super(props);
        this.state = {
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
            'headers' : ['Emp. ID','Emp.Name','Company']
        }
    }


    render(){
        
        const headers = this.state.headers.map(header => {
            return(
                <th>{header}</th>
            )
        })

        const items = this.state.items.map(item => {
            return(
                <tr>
                    <td>{item["Emp. ID"]}</td>
                    <td>{item["Emp. Name"]}</td>
                    <td>{item.Company}</td>
                </tr>
            )
        })

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            {headers}                       
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )

    }


}

export default CompanyCeo;