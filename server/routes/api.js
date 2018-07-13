const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://lasik:artek870@ds137661.mlab.com:37661/portfolio";

mongoose.Promise = global.Promise;


mongoose.connect(db, function(err){
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
                res.json();
                console.log(posts);
            }
        });
});

module.exports = router;