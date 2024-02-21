// import
const mongoose = require('mongoose');
const connection_string =process.env.db_connection_string
mongoose.connect(connection_string).then(
    ()=>{
        console.log("mongodb DocHere db connected");
    }
).catch((err)=>
{
    console.log("Error in connecting to the database "+ err);
}
)