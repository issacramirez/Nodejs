const express = require('express');
const morgan = require('morgan');
const path = require('path');

const connection = require('./Connection.js');

// Inizialition
const app = express();

// Settings
app.set('port', 3000);
const port = app.get('port');

// Start the server
app.listen(port, () => {
    console.log('Server on port: ', port);
});

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/usuarios', require('./routes/Usuarios'));
app.use('/edit', require('./routes/EditUsuarios'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

connection.testDb()
