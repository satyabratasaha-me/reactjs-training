import React from 'react'

const User = (props) => {
    return(
    <div>Hi! {props.match.params.username}</div>
    )
}

export default User