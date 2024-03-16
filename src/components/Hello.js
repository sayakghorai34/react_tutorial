import React, {Component} from 'react';

const Hello = () => {
    return React.createElement(
        'div', 
        // null,
        {id: 'div1', className: 'dummyClass'},
        React.createElement(
            'h1', 
            {id: 'div2', className: 'h1Class'}, 
            'This is inside div tag'
        ),
        React.createElement(
            'p', 
            {id: 'p1', className: 'pClass'}, 
            'This is a p tag inside div'
        ),
        React.createElement(
            'p', 
            {id: 'p2', className: 'pClass'}, 
            React.createElement(
                'div', 
                {id: 'div2', className: 'dummyClass'},
                'This is a div inside p tag'
            )
        )
    )
}
export default Hello;