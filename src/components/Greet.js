import React from 'react'

// function Greet() {
//     return <h1>First React</h1>
// }

export const Greet = props => {
    console.log(props.name, props)
    return (
        <div>
            <h1 className='card nameClass'>
                Hello {props.name}{' or '+props.secondName}
            </h1>
            {props.children}
        </div>
    )
}

export default Greet