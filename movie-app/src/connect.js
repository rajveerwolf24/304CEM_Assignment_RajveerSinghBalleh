const mongoose = require ('mongoose');

const db = "mongodb+srv://rajveer24:rajveer2424@cluster0.5f5ghlx.mongodb.net/304CEM?retryWrites=true&w=majority";

mongoose.connect(db).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Error Connecting to database");
})

const heroSchema = new mongoose.Schema({
    Title: {type: String},
    Date: {type: String},
    Rating: {type: String}
});

const Film = mongoose.model('304CEM',heroSchema);

module.exports = Film;