### React Hello World with Webpack


Install the starter template
```
$ git clone https://github.com/ironhack-labs/react-module-day1-start
$ cd react-module-day1-start
$ npm install
```

Then create these folders

```
$ mkdir dist public src
```

Create an index.html file
```
$ touch public/index.html
```

The dist folder in the script tag is where webpack references our built react app by webpack
```
// public/index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Ironhackers Reacting</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

We also need react and react-dom
```
$ npm install react@16.3.2 react-dom@16.3.2 
```

We need a file that is the entry point to our app
```
$ mkdir src
$ touch src/index.js
```

```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(
    'Hello World',
    document.getElementById('root')
);
```

Add the style.css to the src directory
```
$ touch src/style.css
```

```
// src/style.css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: lightskyblue;
}
```

Now run 
```
$ npm run webpack --watch
```

Or to build 
Add build: webpack to the package.json - otherwise you would have to go into the right node_modules folder
```
$ npm run build
```
Or without modifying package.json
```
$ npx webpack
```

### Demo React Dev Tools



## JSX 

JSX - JavaScript eXtension is a special syntax that produces React Elements - it reminds you 
of handlebars but it has the full power of javascipt


In index.js: render this element instead of the string 'Hello World'
```
const element = <h1>Hello, world!</h1>;
```

### Embedding JavaScript Expressions in JSX

You can enbed any JS Expression in JSX within curly brace

```
const name = 'Dan Abramov';
const element = <h1>Hello, {name}</h1>;
```

### Return it from functions
```
const greet = () => {
    return <h1 className="heading">Hello World!!</h1>;
}

ReactDOM.render(
    greet(),
    document.getElementById('root')
);
```

### Wrap multilines with parenthesis
```
const element = (
  <h1>
    Hello, {use}!
  </h1>
);
```


### HTML Attributes change because these are also reserved keywords in JavaScript:
for -> htmlfor
class -> className  ( from react-16 on also class works but not everywhere )



### Inline styling - style attribute has to reference an object - either create object before or inline 
### You can also only return a single node - that is why you have to wrap the element in a div
```
const myStyle = {
  height: "200px"
};

const element = (
    <div>
        <p
        style={{
            backgroundColor: "pink"
        }}
        >
        Random number: {Math.floor(Math.random() * 10)}
        </p>
        <p style={myStyle}>
            Second Paragraph
        </p>
    </div>
);
```

### You need to close all tags 
```
<br> -> <br />
<img src="" alt=""> -> <img src="" alt="" />
```

### That's what's happening internally - babel compiles to REACT.createElement()

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// get's compiled to this:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```