import React, {Component} from 'react'
import Table from '../components/Table'


class ViewAllBooks extends Component {


    render(){

        const cols = ['Name','Author','Price']

        const rows = [  {'Book':'ABC','Author':'XYZ','Price':'200'},
                        {'Book':'ADEF','Author':'XYZ','Price':'200'}];

      

        return(
            <React.Fragment>
                <div>
                    <a>Get Books</a>
                </div>

                <div>
                    <Table headers = {cols} items={rows}>All Books</Table>
                </div>

            </React.Fragment>
        )
    }

}

export default ViewAllBooks;