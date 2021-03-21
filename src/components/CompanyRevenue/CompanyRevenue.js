import React, {Component} from 'react'
// import  '../CompanyRevenue/CompanyRevenue.css'

class CompanyRevenue extends Component {

    constructor(props){
        super(props);

    }


    render(){

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Revenue(USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apple</td>
                            <td>$111.4 billion </td>
                        </tr>
                        <tr>
                            <td>Google</td>
                            <td>$741 billion</td>
                        </tr>
                        <tr>
                            <td>Amazon</td>
                            <td>$233 billion</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }


}

export default CompanyRevenue;