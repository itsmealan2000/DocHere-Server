const medicine = require('../Models/pharmacyModel');
const jwt = require('jsonwebtoken');

// Add Medicine
exports.addMedicine = async (req, res) => {
    const { medicinename, Price, stock } = req.body;
    console.log("inside addMedicine req");
    try {
        const existingMedicine = await medicine.findOne({ medicinename });
        console.log(existingMedicine);
        if (existingMedicine) {
            return res.status(400).json("Medicine already exists");
        } else {
            const newMedicine = new medicine({
                medicinename,
                Price,
                stock
            });
            console.log(`${medicinename} added successfully`);
            await newMedicine.save();
            return res.status(200).json({ medicinename: newMedicine.medicinename });
            
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};

// Change Stock
exports.changeStock = async (req, res) => {
    const { medicinename, stock } = req.body;
    console.log("inside changeStock req");
    try {
        const existingMedicine = await medicine.findOne({ medicinename });
        console.log(existingMedicine);
        if (existingMedicine) {
            existingMedicine.stock = stock;
            await existingMedicine.save();
            console.log(`${medicinename} stock changed successfully`);
            return res.status(200).json({ stock: existingMedicine.stock });
        } else {
            return res.status(400).json("Medicine does not exist");
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};

// Remove Medicine
exports.removeMedicine = async (req, res) => {
    const { medicinename } = req.body;
    console.log("inside removeMedicine req");
    try {
        const existingMedicine = await medicine.findOne({ medicinename });
        console.log(existingMedicine);
        if (existingMedicine) {
            await existingMedicine.deleteOne();
            console.log(`${medicinename} removed successfully`);
            return res.status(200).json({ medicinename: existingMedicine.medicinename });
        } else {
            return res.status(400).json("Medicine does not exist");
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};

// Search Medicine
exports.searchMedicine = async (req, res) => {
    try{
        const medicines = await medicine.find();
        res.status(200).json(medicines);
    }
    catch(err){
        res.status(404).json({ message: err.message });
    }
}
