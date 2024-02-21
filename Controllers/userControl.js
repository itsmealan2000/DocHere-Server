const users = require('../Models/usermodel');
const jwt = require('jsonwebtoken');


// Register
exports.register = async (req, res) => {
    const { username, email, password, age,gender } = req.body;
    console.log("inside register req");  
    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).json("Email already exists");
        } else {
            const newUser = new users({
                username,
                email,
                password,
                age,
                gender,
                profile: ""
            });
            await newUser.save();
            return res.status(200).json({ username: newUser.username });
        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};

//login
exports.login = async (req, res) => {
      const {email,password} = req.body;
      console.log("inside login req");
      try {
         //  check email password already exist
         const user = await users.findOne({email,password})
         console.log(user);
         if(!user){
            return res.status(400).json("User not found")
         }else{
            if(password === user.password){
               const token = jwt.sign({id:user._id},process.env.jwt_secret,{
                  expiresIn: "1d"
               })
               res.status(200).json({token,user})
               console.log("token",token);               
            }else{
               res.status(400).json("Invalid password")
            }
         }
      }catch(error){
         res.status(401).json(error)
      }
}

//profile
exports.profile = async (req, res) => {
   try {
     const { email } = req.query; // Retrieve email from query parameters
     console.log({ email });
     console.log("Inside profile controller");
     // Perform any necessary operations with the email, such as fetching user profile data
     let userProfileData = await users.findOne({ email });
     console.log(userProfileData);
     if (!userProfileData) {
       return res.status(400).json({ message: `User not found: ${email}` });
     }
     // Send back the user's profile information
     res.status(200).json(userProfileData);
   } catch (err) {
     console.error("Error in profile controller:", err);
     res.status(500).json({ error: "Internal server error" });
   }
 };
 

  