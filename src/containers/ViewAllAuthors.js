import React, {Component} from 'react'
import Table from '../components/Table'
import Radium from 'radium'


const style = {
    color : 'blue',
    ':hover' : {
        color:'green',
    }
}


class ViewAllAuthors extends Component {



    render(){

       
        const cols = ['Name','Author','Price']

        const rows = [  {'Book':'ABC','Author':'XYZ','Price':'2001'},
                        {'Book':'ADEF','Author':'XYZ','Price':'200'}];

      

        return(
            <React.Fragment>
                <div>
                    <a style={style}>Get Books</a>
                </div>

                <div>
                    <Table headers = {cols} items={rows}>All Books</Table>
                </div>

            </React.Fragment>
        )
    }

}



export default Radium(ViewAllAuthors);