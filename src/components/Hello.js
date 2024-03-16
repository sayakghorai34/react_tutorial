import React, {Component} from 'react';

const Hello = () => {
    return React.createElement(
        'div', 
        // null,
        {id: 'div1', className: 'divClass'},
        React.createElement(
            'h1', 
            {id: 'h1', className: 'h1Class'}, 
            'This is inside div tag'
        ),
        React.createElement(
            'p', 
            {id: 'p1', className: 'pClass'}, 
            'This is a p tag inside div'
        ),
        React.createElement(
            'div', 
            {id: 'div3', className: 'divClass'}, 
            React.createElement(
                'div', 
                {id: 'div3', className: 'divClass'},
                'This is a div inside div tag'
            )
        )
    )
}
export default Hello;