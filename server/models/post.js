
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    date: String,
    content: String
}, {collection: 'blogpost'});

//export model so that it is usable in API
module.exports = mongoose.model('post', postSchema);