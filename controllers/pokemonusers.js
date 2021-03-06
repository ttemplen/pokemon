const express = require("express");
const router = express.Router();

//const Player = require('../models').Player;
const User = require('../models').User;
const Team = require('../models').Team;
const Pokemon = require('../models').Pokemon;




//const User = require('../models').User;


// Add index route
router.get('/', (req, res) => {
    res.render('users/index.ejs', {
        
    });
})

router.get('/signup',(req,res)=>{
    console.log(req.body)
    res.render('users/signup.ejs')

})
//seq
router.get('/login',(req,res)=>{
    console.log(req.body)
    res.render('users/login.ejs')
        
})
//seq
router.post('/login', (req, res)=>{
    User.findOne({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    }) .then((thisUser)=>{
        res.redirect('/users/profile/'+ thisUser.id)
    })
   
    
});

//seq
router.post('/profile', (req, res)=>{
    User.create(req.body).then((newUser) => {
    res.redirect("profile/" + newUser.id);
        
 });
});

//seq
router.get("/profile/:id", (req, res) => {
    User.findByPk(req.params.id, {
      include:[{ model: Team }, { model: Pokemon }],
    }).then((singlePlayer) => {
      Team.findAll().then((allTeams) => {
        console.log(singlePlayer);
        res.render("users/profile.ejs", {
      player: singlePlayer,
      teams: allTeams,
        });
      });
    });
  });




// router.get("/profile/:id", (req, res) => {
//     User.findByPk(req.params.id).then((thisUser) => {  
//         Team.findAll().then((allTeams) => {
//             console.log("list of teams" + allTeams);
//             res.render("users/profile.ejs", {
//                 userInfo: thisUser,
//                 index: req.params.id,
//                 teams: allTeams,
//             })
//         })


//     });
// })


router.put("/profile/:id", (req, res) => {
        User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((user) => {
    res.redirect("/users/profile/" + req.params.id);
    });
  });

router.delete("/:id", (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/users");
    });
  });

module.exports = router;