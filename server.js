const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Middleware comes before routes.
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use.apply(express.static('public'));
app.use(express.urlencoded({ extended: true }))
//capture new pokey data and load it into our model/pokey array

app.use(methodOverride('_method'));

app.use("/pokey", require("./controllers/pokemon"));
//Middleware ends

// const pokemon = [
//     {
//       name: "Bulbasaur",
//       img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
//     },
//     {
//       name: "Ivysaur",
//       img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
//     },
//     {
//       name: "Venusaur",
//       img: "http://img.pokemondb.net/artwork/venusaur.jpg"
//     },
//     {
//       name: "Charmander",
//       img: "http://img.pokemondb.net/artwork/charmander.jpg"
//     },
//     {
//       name: "Charizard",
//       img: "http://img.pokemondb.net/artwork/charizard.jpg"
//     },
//     {
//       name: "Squirtle",
//       img: "http://img.pokemondb.net/artwork/squirtle.jpg"
//     },
//     {
//       name: "Wartortle",
//       img: "http://img.pokemondb.net/artwork/wartortle.jpg"
//     }
//   ];

//   app.get('/pokemon', (req, res) => {
//     res.render('index.ejs', {
//         pokemons: pokemon
//     });
// }) 
// //Delete
// app.delete('/pokemon/:index', (req, res) => {
// 	pokemon.splice(req.params.index, 1); //remove the item from the array
// 	res.redirect('/pokemon');  //redirect back to index route
// });
// //New- renders new.ejs html file
// app.get('/pokemon/new',(req,res)=>{
// res.render('new.ejs')

// })
// //Post
// app.post('/pokemon', (req, res)=>{
//     // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is 
//     //     ///set to 'on, turn to boolean true'
//     //     req.body.readyToEat = true; //do some data correction
//     // } else { //if not checked, req.body.readyToEat is undefined
//     //     req.body.readyToEat = false; //do some data correction
//     // }
//     pokemon.push(req.body);
    
//     res.redirect('/pokemon');
// });
// //GET post
// app.get('/pokemon/:index/edit', (req, res) =>{
// 	res.render('edit.ejs', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			pokemon: pokemon[req.params.index], //the  object
// 			index: req.params.index //... and its index in the array
// 		}
// 	);
// });

// //PUT route for EDIT
// app.put('/pokemon/:index', (req, res) => { //:index is the index of our fruits array that we want to change
//     //if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//       //  req.body.readyToEat = true;
//     //} else { //if not checked, req.body.readyToEat is undefined
//      //   req.body.readyToEat = false;
//   //  }
//     pokemon[req.params.index] = req.body; //in our pokemon array, 
//     //find the index that is specified in the url (:index). 
//     // Set that element to the value of req.body (the input data)
// 	res.redirect('/pokemon'); //redirect to the index page
// });


// app.get('/pokemon/:index', (req, res) => {
//     res.render('show.ejs', {
//         pokemon: pokemon[req.params.index]
//     });
// })

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon);
// });

  

// app.get('/pokemon/:index', (req, res) => {
//     res.send(pokemon[req.params.index]);
// });



app.listen(3000, ()=>{
    console.log("I am listening");
});

