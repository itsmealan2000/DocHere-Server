const express = require('express');
const Router = express.Router()
const userControl = require('../Controllers/userControl')
const doctorControl = require('../Controllers/doctorControl')

//users
Router.post('/register', userControl.register);
Router.post('/login', userControl.login);
Router.get('/profile', userControl.profile);

// doctors
Router.post('/adddoctor', doctorControl.addDoctor);
Router.get('/getdoctor', doctorControl.getDoctor);



module.exports = Router;