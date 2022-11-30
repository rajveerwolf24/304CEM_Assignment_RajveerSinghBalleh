const Record = require('./Connect');
const express = require ('express');
const app = express();
const axios = require ('axios');



const querystr = `http://www.omdbapi.com/?i=tt3896198&apikey=ebcb094f`;
    axios.get(querystr).then((response)=>{
    Title = response.data.results?.title;
    Date = response.data.results?.release_date;
    Rating= response.data.results?.vote_average;

    filmValue = new Record({
        Title:Title,
        Date:Date,
        Rating:Rating,
    });

    filmValue.save().then(result=>{
        console.log("Success"+result);
    }).catch(error=>{
        console.log("Error"+error);
    })
    }
    );



app.listen(1000);