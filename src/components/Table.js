import React from 'react';

const Table = (props) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {props.headers}                       
                    </tr>
                </thead>
                <tbody>
                    {props.items}
                </tbody>
            </table>
        </div>
    )
}

export default Table;