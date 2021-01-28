const express = require('express');
const app = express();

const methodOverride = require('method-override');
//Middleware comes before routes.
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended: true }))
//capture new pokey data and load it into our model/pokey array


app.use("/pokemon", require("./controllers/pokemon"));
app.use("/users", require("./controllers/pokemonusers.js"));
//Middleware ends


app.listen(3000, ()=>{
    console.log("I am listening");
});

