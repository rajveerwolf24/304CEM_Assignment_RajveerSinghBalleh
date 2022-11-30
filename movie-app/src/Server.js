const Record = require('./Connect');
const express = require ('express');
const app = express();
const axios = require ('axios');

const apikey = 'ebcb094f';

app.get('/getMovie', (req,res)=>{
const title = req.query.title;
const querystr = `https://www.omdbapi.com/?t=Star+Wars&apikey=ebcb094f`;
    axios.get(querystr).then((response)=>{
    Title = response.data.Title;
    Year = response.data.Year;
    Director = response.data.Director;

    filmValue = new Record({
        movieTitle:Title,
        movieYear:Year,
        movieDirector:Director,
    });

    filmValue.save().then(result=>{
        console.log("Success"+result);
    }).catch(error=>{
        console.log("Error"+error);
    })

    res.send(Title + "<br>" + Year + "<br>" + Director + "<br>" + "Record saved");
    }
    );
});



app.listen(3000);