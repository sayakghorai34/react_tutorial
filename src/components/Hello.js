import React, {Component} from 'react';

const Hello = () => {
    return React.createElement(
        'div', 
        // null,
        {id: 'div1', className: 'card divClass'},
        React.createElement(
            'h1', 
            {id: 'h1', className: 'card h1Class'}, 
            'This is inside div tag'
        ),
        React.createElement(
            'p', 
            {id: 'p1', className: 'card pClass'}, 
            'This is a p tag inside div'
        ),
        React.createElement(
            'div', 
            {id: 'div3', className: 'card divClass'}, 
            React.createElement(
                'div', 
                {id: 'div3', className: 'card divClass'},
                'This is a div inside div tag'
            )
        )
    )
}
export default Hello;