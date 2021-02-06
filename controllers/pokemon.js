const express = require('express');
const router = express.Router();

//Add Pokemon model
const Pokemon = require('../models').Pokemon;



router.get("/", (req, res) => {
    Pokemon.findAll().then((pokemons) => {
      res.render("index.ejs", {
        pokemons: pokemons,
      });
    });
  });
//Delete
router.delete("/:id", (req, res) => {
    Pokemon.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/pokemon");
    });
  });
//New- renders new.ejs html file
router.get('/new',(req,res)=>{
res.render('new.ejs')

})
//Post
router.post("/", (req, res) => {  
    Pokemon.create(req.body).then((newPokemon) => {
      res.redirect("/pokemon");
    });
  });


//Edit 
router.get("/:id/edit", function (req, res) {
    Pokemon.findByPk(req.params.id).then((pokemon) => {
      res.render("edit.ejs", {
        pokemon: pokemon,
      });
    });
  });


//PUT route for EDIT
router.put("/:id", (req, res) => {
    Pokemon.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((pokemon) => {
      res.redirect("/pokemon");
    });
  });


  router.get("/:id", (req, res) => {
    Pokemon.findByPk(req.params.id).then((pokemon) => {
      res.render("show.ejs", {
        pokemon: pokemon,
      });
    });
  });

// router.get('/', (req, res) => {
//     res.send(pokemon);
// });

  

// router.get('/:index', (req, res) => {
//     res.send(pokemon[req.params.index]);
// });



module.exports = router;