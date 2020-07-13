// import react
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// some jsx
const name = 'Hans';
// embed javascript in jsx
// const element = <h1 className="heading">Hello {name + '!!'}</h1>

// const greet = (name) => {
//     return <h1 className="heading">Hello {name}</h1>
// }

// React.createElement('h1', {}, 'Hello World!)

// ReactDOM.render(
//     greet(name),
//     document.getElementById('root')
// );


// wrap multiple lines with parentheses
const myStyle = {
    height: "200px"
}
const element = (
    <div>
        <p style={{ backgroundColor: "pink" }}>
            Random Number: {Math.floor(Math.random() * 10)}
        </p>
        <p style={myStyle}>
            Second Paragraph
        </p>
        {/* you need to close all tags <br> -> is not allowed */}
        <br />
    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
);