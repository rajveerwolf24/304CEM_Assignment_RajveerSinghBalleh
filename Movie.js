const Film = require('./Film')
 
filmValue = new Film ({
    title:"X-Men",
    year: "2008",
    genre:"Action"
    });
   
    filmValue
    .save()
    .then(result=> {
    console.log("Success" + result);
    }
    )
    .catch (error=> {
    console.log("Error" + error);
    }
    );
//Run this file to insert the data.

const Film = require('./Film')
 
const axios = require('axios');
 
const apikey = '869744ce';
const title = 'Garfield';
 
 
const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
 
axios.get(querystr).then( (response) =>{
    filmValue = new Film ({
 
        title:response.data.Title,
   
        year:response.data.Year,
   
        genre:response.data.Genre
   
        });
   
      
   
        filmValue
   
        .save()
   
        .then(result=> {
   
        console.log("Success" + result);
   
        }
   
        )
   
        .catch (error=> {
   
        console.log("Error" + error);
   
        }
   
        );
   
    //Run this file to insert the data.
 
}
);
