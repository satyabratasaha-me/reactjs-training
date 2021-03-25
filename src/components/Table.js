import React, { Suspense } from 'react';

const Table = (props) => {
    return(
        <div>
            <p>{props.children}</p>
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