const UserBill = require('../Models/userbillModel'); // Assuming userbillModel is correctly defined

exports.addBill = async (req, res) => {
    const { username, selectedMedicines, total } = req.body;
    console.log("inside addBill req");
    try {
        // Check if a bill already exists for the provided username
        const existingBill = await UserBill.findOne({ username: username });
        if (existingBill) {
            return res.status(400).json({ message: "Bill already exists for this user" });
        } else {
            // Extract medicine names from selectedMedicines array
            const medicineNames = selectedMedicines.map(medicine => medicine.medicinename);

            // Create a new bill entry
            const newBill = new UserBill({
                username,
                medicineName: medicineNames, // Update medicineName with medicine names
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
 