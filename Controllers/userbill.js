const UserBill = require('../Models/userbillModel');

exports.addBill = async (req, res) => {
    const { username, selectedMedicines, total } = req.body;
    console.log("inside addBill req");
    try {
        const existingBill = await UserBill.findOne({ username: username });
        if (existingBill) {
            return res.status(400).json({ message: "Bill already exists for this user" });
        } else {
            const medicineNames = selectedMedicines.map(medicine => medicine.medicinename);
            const newBill = new UserBill({
                username,
                medicineName: medicineNames, 
                total
            });
            console.log(`${username}'s bill added successfully`);
            await newBill.save();
            return res.status(200).json({ message: "Bill added successfully", username: newBill.username });
        }
    } catch (err) {
        console.error('Error adding bill:', err);
        return res.status(500).json({ message: "Failed to add bill. Please try again later.", error: err });
    }
}


//getuserbill
exports.getAllBill = async (req, res) => {
    try {
        const bills = await UserBill.find();
        res.status(200).json(bills);
    } catch (err) {
        console.error('Error fetching user bills:', err);
        res.status(500).json({ message: "Failed to fetch user bills. Please try again later.", error: err });
    }
 }
 
//removebill
exports.removeBill = async (req, res) => {
    const { username } = req.body;
    try {
        const existingBill = await UserBill.findOne({ username: username });
        if (!existingBill) {
            return res.status(400).json({ message: "Bill does not exist for this user" });
        } else {
            await UserBill.deleteOne({ username: username });
            console.log(`${username}'s bill removed successfully`);
            return res.status(200).json({ message: "Bill removed successfully", username: existingBill.username });
        }
    }
    catch (err) {
        console.error('Error removing bill:', err);
        return res.status(500).json({ message: "Failed to remove bill. Please try again later.", error: err });
    }
}