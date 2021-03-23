import React from 'react';
import PropTypes from 'prop-types'

const Table = (props) => {
    const headers = props.headers.map((item,index) => {
        return(
        <th key={index}>
            {item}
        </th>
        )
    })

    const rows = props.items.map((row,index) => {
        return(
            <React.Fragment>
                <tr key={index}>
                    <td>{row.Book}</td>
                    <td>{row.Author}</td>
                    <td>{row.Price}</td>
                </tr>
            </React.Fragment>
        )
    })



    return(
        <div>
            <p>{props.children}</p>
            <table>
                <thead>
                    <tr>
                        {headers}                       
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    children : PropTypes.string
}

export default Table;