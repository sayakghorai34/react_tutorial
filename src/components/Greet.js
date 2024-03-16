import React from 'react'

// function Greet() {
//     return <h1>First React</h1>
// }

export const Greet = props => {
    console.log(props.name)
    return <h1>Hello {props.name}</h1>
}

export default Greet