const express = require('express');
const Router = express.Router()
const userControl = require('../Controllers/userControl')
const doctorControl = require('../Controllers/doctorControl')
const pharmacyControl = require('../Controllers/pharmacyControl')

//users
Router.post('/register', userControl.register);
Router.post('/login', userControl.login);
Router.get('/profile', userControl.profile);

// doctors
Router.post('/adddoctor', doctorControl.addDoctor);
Router.get('/getdoctor', doctorControl.getDoctor);

// pharmacy
Router.post('/addmedicine', pharmacyControl.addMedicine);
Router.put('/changestock', pharmacyControl.changeStock);
Router.delete('/removemedicine', pharmacyControl.removeMedicine);
Router.get('/searchmedicine', pharmacyControl.searchMedicine);

module.exports = Router;