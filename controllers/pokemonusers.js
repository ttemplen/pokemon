const express = require("express");
const router = express.Router();

const users = require("../model/users");


// Add index route
router.get('/', (req, res) => {
    res.render('users/index.ejs', {
        
    });
})

router.get('/signup',(req,res)=>{
    console.log(req.body)
    res.render('users/signup.ejs')

})

router.get('/login',(req,res)=>{
    console.log(req.body)
    res.render('users/login.ejs')
        
})

router.post('/login', (req, res)=>{
    let thisUser=users.findIndex((user)=>
    user.username==req.body.username && user.password == req.body.password
    )
    res.redirect('/users/profile/'+ thisUser)
});


router.post('/profile', (req, res)=>{
     users.push(req.body);
    let userIndex = users.length-1
    res.redirect(`profile/${userIndex}`);
    //using backticks allows template literals above
 });

 router.get("/profile/:index", (req, res) => {
    res.render("users/profile.ejs", {
        userInfo: users[req.params.index], //the fruit object
			index: req.params.index 
    });
})

router.put("/profile/:index", (req, res) => { 
    users[req.params.index] = req.body; 
    let index = req.params.index ;
    res.redirect('/users/profile/'+index); 
});

router.delete('/:index', (req, res) => {
	users.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/users');  //redirect back to index route
});






module.exports = router;