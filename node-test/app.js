const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parsor');
const app = express();

const userRoutes = require('./routes/user');

const { body, validationResult } = require('express-validator');

app.use(bodyParser.json())

app.use('/create-user', [
    body('name')
        .isString()
        .notEmpty()
        .withMessage('Name is required and must be a string')
], userRoutes);



mongoose.connect('mongodb://localhost:27017/sample')
    .then(res => {
        console.log('connecteddddddddd')
        app.listen(3000);
    })
    .catch((err) => {
        console.log()
    })

