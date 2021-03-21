import React, {Component} from 'react'
import  '../CompanyCeo/CompanyCeo.css'

class CompanyCeo extends Component {

    constructor(props){
        super(props);

    }


    render(){

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Emp. ID</th>
                            <th>Emp. Name</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>U1234</td>
                            <td>Tim Cook</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>U1235</td>
                            <td>Sundar Pichai</td>
                            <td>Google</td>
                        </tr>
                        <tr>
                            <td>U1236</td>
                            <td>Jeff Bezos</td>
                            <td>Amazon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }


}

export default CompanyCeo;