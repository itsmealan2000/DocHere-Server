const doctor = require('../Models/doctorModel');
const jwt = require('jsonwebtoken');

// adddoctor
exports.addDoctor = async (req, res) => {
    const { docname, speciality,available } = req.body;
    try {
        const newDoctor = new doctor({ 
            docname,
            speciality,
            available });
        await newDoctor.save();
        return res.status(200).json({ username: newDoctor.docname });

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// find a doctor
exports.getDoctor = async (req, res) => {
    try {
        const doctors = await doctor.find();
        res.status(200).json(doctors);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// remove a doctor
exports.removeDoctor = async (req, res) => {
    const { docname } = req.body;
    try {
        await doctor.deleteOne({ docname });
        res.status(200).json({ username: docname });
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
}