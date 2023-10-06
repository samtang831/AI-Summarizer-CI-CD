'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 5173;
const HOST ='0.0.0.0';
const app = express();

// Serve static files from the 'build' directory
app.use(express.static(__dirname));

// Define a route that serves your React application
app.get('/', (req, res) => {
    res.sendFile('index.html');
  });  

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});