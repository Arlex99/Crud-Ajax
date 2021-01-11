// Import lib
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// Connect db 
mongoose.connect('mongodb://localhost/parcial')
    .then(db => console.log('DB COnnect'))
    .catch(err => console.log(err));

// Import local
const indexRoutes = require('./routes/index');



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);


// configuracion del puerto
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
});