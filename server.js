const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Middleware comes before routes.
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//app.use.apply(express.static('public'));
app.use(express.urlencoded({ extended: true }))
//capture new pokey data and load it into our model/pokey array

app.use(methodOverride('_method'));

app.use("/pokemon", require("./controllers/pokemon"));
//Middleware ends




app.listen(3000, ()=>{
    console.log("I am listening");
});

