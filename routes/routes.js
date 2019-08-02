const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Players = mongoose.model('Players');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/', (req,res) => {
    Players.find({}).then((results) => {
        res.render('home', { signed: results});
    })
});

router.post('/signed', (req,res) => {
    signedPlayers(req,res);
    res.redirect('/');
});

function signedPlayers(req,res){
    let newPlayers = new Players();

        newPlayers.name = req.body.name;
        newPlayers.age = parseInt(req.body.age);
        newPlayers.position = req.body.position;
        newPlayers.save()
        .then((result) => {
            console.log(result);
            res.redirect('/');
        })
        .catch((err,doc) => {
            if(!err){
                res.redirect('/');
            }else{
                console.log(err);
            }
        });
}

/*router.get('/updated/:id', (req,res) => {
    let playerId = req.params.id;
    Players.findByIdAndUpdate(playerId, (err, doc) => {
        if(err){
            console.log(err);
        }else{
            res.render('home', {doc});
        }
    });
});*/

router.get('/process/:id', (req,res) => {
    let playerId = req.params.id;
    Players.findByIdAndDelete(playerId, (err, doc) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    })

});


module.exports = router;