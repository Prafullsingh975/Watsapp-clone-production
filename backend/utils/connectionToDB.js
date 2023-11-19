const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const connectionToDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser :true,
            useUnifiedTopology :true
        });
        // mongoose.createConnection(mongoURI, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        // });
        console.log('DB Connected! to '+ process.env.MONGO_URI);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectionToDB;