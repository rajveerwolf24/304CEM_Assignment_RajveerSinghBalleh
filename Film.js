const mongoose = require('mongoose');
 
const db = "mongodb+srv://rajveer24:rajveer2424@cluster0.5f5ghlx.mongodb.net/304CEM?retryWrites=true&w=majority";
 //Note: The Highlighed yellow is your user name in Altas MongoDb.
//The highlighted red is your password
//The highlighted blue is your Database Name.
mongoose
.connect(db)
.then(()=> {
console.log("Connected to database");
}
)
.catch(()=> {
console.log("Error Connected to database");
}
)
 //A schema matched the table in your database
const filmSchema = new mongoose.Schema({
    title: { type: String},
    year: { type: String},
    genre:{ type: String}
    }
    );
 
    const Film = mongoose.model('Movies', filmSchema);
 //The highlighted yellow is your table name. 
    module.exports = Film;
