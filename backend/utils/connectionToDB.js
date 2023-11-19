const mongoose = require("mongoose");
// const mongoURI = process.env.MONGO_URI;

const connectionToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://prafullsingh975:GjH1fDRoOMRj6xIc@cluster0.w4hr54z.mongodb.net/whatsapp_clone",{
            useNewUrlParser :true,
            useUnifiedTopology :true
        });
        // mongoose.createConnection(mongoURI, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        // });
        console.log('DB Connected!');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectionToDB;