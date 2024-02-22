const express = require('express');
const Router = express.Router()
const userControl = require('../Controllers/userControl')
const doctorControl = require('../Controllers/doctorControl')
const pharmacyControl = require('../Controllers/pharmacyControl')
const userbillControl = require('../Controllers/userbill')

//users
Router.post('/register', userControl.register);
Router.post('/login', userControl.login);
Router.get('/profile', userControl.profile);
Router.get('/getallusers', userControl.getAllUsers);

// doctors
Router.post('/adddoctor', doctorControl.addDoctor);
Router.get('/getdoctor', doctorControl.getDoctor);
Router.delete('/removedoctor', doctorControl.removeDoctor);

// pharmacy
Router.post('/addmedicine', pharmacyControl.addMedicine);
Router.put('/changestock', pharmacyControl.changeStock);
Router.delete('/removemedicine', pharmacyControl.removeMedicine);
Router.get('/searchmedicine', pharmacyControl.searchMedicine);

// bills
Router.post('/addbill', userbillControl.addBill);
Router.get('/getuserbill', userbillControl.getAllBill);
Router.delete('/removebill', userbillControl.removeBill);


module.exports = Router;