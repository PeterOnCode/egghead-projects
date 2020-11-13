# Getting Started with Express.js

Express is a minimal web server built on Node.js that provides essential functionality for delivering web applications to the browser and mobile devices. This series will guide you through the first steps of using Express for building your own applications.

## Create a Basic Server with Express

1. Start by initializing a `package.json`

    ```bash
    npm init -y
    ```
1. Install Express

    ```bash
    npm i -S express
    ```
1. create `index.js`

    ```js
    const express = require('express')
    ```
1. start app

    ```bash
    node index.js
    ``` 
1. `index.js`

    ```js
    const express = require('express')
    const app = express()
    
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })
   
   app.listen(3000)
    ```
1. Express application generator
    
     <http://expressjs.com/en/starter/generator.html>
 
     ```bash
     npx express-generator
     ```
1. [nodemon](https://nodemon.io/) reload, automatically

    ```bash
    npm install -S nodemon 
   ```
1. 
