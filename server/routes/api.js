const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');


mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser: true }, function(err){
    if(err){
        console.log('Connection Error');
    }
});

router.get('/posts', function(req, res){
    console.log("requesting posts...");
    post.find({})
        .exec(function(err, posts){
            if(err){
                console.log("error getting the posts");
            }else{
                res.json(posts);
                console.log(posts);
                
            }
        });
});

router.get('/post/:id', function(req, res){
    console.log('requesting posts...');

    post.findById(req.params.id)
        .exec(function(err,post){
            if(err){
                console.log(err);
            }else{
                console.log(req.params.id);
                res.json(post);
                console.log(post);
            }
        });
});

module.exports = router;