const express = require('express');
const app = express();

// Set up view engine
app.set('view engine', 'ejs');

// Create home route
app.get('/', (req, res, next) => {
    res.render('home');
});

module.exports = app;