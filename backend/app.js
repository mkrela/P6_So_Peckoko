const express = require('express');
const mongoose = require("mongoose");
const helmet = require('helmet');
const path = require("path");
require('dotenv').config();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauces');

mongoose.connect(
    
)

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('./api/sauces',(req,res, next) => {
    const sauces = [
        {
            _id: 'sauce1',
            title: 'amora',
            description: 'de la bonne mayo',
            imageUrl: '',
            price: 5000,
            userId: 'ola',
        },
        {
            _id: 'sauce2',
            title: 'ama',
            description: 'de la mayo',
            imageUrl: '',
            price: 500,
            userId: 'ola2',
        },
    ];
    console.log('allooooofoooo')
    res.status(200).json(sauces);
});

app.use((req, res, next) => {
   res.json({ message: 'Votre requête a bien été r!' }); 
});

module.exports = app;
