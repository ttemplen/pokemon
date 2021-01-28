onst express = require('express');
const router = express.Router();

//Add Pokemon model
const pokeman = require('../server.js');


router.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemons: pokemon
    });
}) 
//Delete
router.delete('/:index', (req, res) => {
	pokemon.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/pokemon');  //redirect back to index route
});
//New- renders new.ejs html file
router.get('/new',(req,res)=>{
res.render('new.ejs')

})
//Post
router.post('/', (req, res)=>{
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is 
    //     ///set to 'on, turn to boolean true'
    //     req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //     req.body.readyToEat = false; //do some data correction
    // }
    pokemon.push(req.body);
    
    res.redirect('/pokemon');
});
//GET post
router.get('/:index/edit', (req, res) =>{
	res.render('edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			pokemon: pokemon[req.params.index], //the  object
			index: req.params.index //... and its index in the array
		}
	);
});

//PUT route for EDIT
router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
    //if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
      //  req.body.readyToEat = true;
    //} else { //if not checked, req.body.readyToEat is undefined
     //   req.body.readyToEat = false;
  //  }
    pokemon[req.params.index] = req.body; //in our pokemon array, 
    //find the index that is specified in the url (:index). 
    // Set that element to the value of req.body (the input data)
	res.redirect('/pokemon'); //redirect to the index page
});


router.get('/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.index]
    });
})

router.get('/', (req, res) => {
    res.send(pokemon);
});

  

router.get('/:index', (req, res) => {
    res.send(pokemon[req.params.index]);
});



module.exports = router;