const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Users = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    location: {
        type: String
    }
});


let Post = new Schema({
    username: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    lastModified: {
        type: Date
    },
    likes: {
        type: Number
    },
    Comments : [{
        username: {
            type: String
        },
        comment: {
            type: String
        },
        lastModified: {
            type: Date
        }
    }]
});
module.exports = mongoose.model('Users', Users);
module.exports = mongoose.model('Post', Post);
