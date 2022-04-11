const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4003;
const userRoutes = express.Router();

const postRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());

let Users = require('./watchedit.model');
let Post = require('./watchedit.model');

mongoose.connect('mongodb://127.0.0.1:27017/watchedit', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

// Get list of all the users
userRoutes.route('/').get(function(req, res) {
    Users.find(function(err, users){
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Add a new user
userRoutes.route('/add').post(function(req, res) {
    let user = new Users(req.body);
    user.save().then(user => {
        res.status(200).json({'users': 'user added successfully'});
    }).catch(err => {
        res.status(400).send('adding new user failed');
    })
});

// Update an user with a given id
userRoutes.route('/update/:id').post(function(req, res) {
    let newUser = req.body;
    const userId = req.params.id;
    Users.findByIdAndUpdate(userId, newUser, function(err, user) {
        if (err) {
            res.status(400).send('updating the user failed');
        } else {
            res.status(200).json({'users': 'user updated successfully'});
        }
    });
});

// Delete an user with a given id
userRoutes.route('/delete/:id').post(function(req, res) {
    const userId = req.params.id;
    Users.findByIdAndDelete(userId, function(err, user){
        if (err) {
            res.status(400).send('deleting the user failed');
        } else {
            res.status(200).json({'users': 'user deleted successfully'});
        }
    });
});

// Get list of all the posts
postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts){
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

// Add a new post
postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save().then(user => {
        res.status(200).json({'Posts': 'post added successfully'});
    }).catch(err => {
        res.status(400).send('adding new post failed');
    })
});

// Update a post with a given id
postRoutes.route('/update/:id').post(function(req, res) {
    let newPost = req.body;
    const postId = req.params.id;
    Post.findByIdAndUpdate(postId, newPost, function(err, user) {
        if (err) {
            res.status(400).send('updating the post failed');
        } else {
            res.status(200).json({'posts': 'post updated successfully'});
        }
    });
});

// Delete a post with a given id
postRoutes.route('/delete/:id').post(function(req, res) {
    const postId = req.params.id;
    Post.findByIdAndDelete(postId, function(err, user){
        if (err) {
            res.status(400).send('deleting the post failed');
        } else {
            res.status(200).json({'Posts': 'post deleted successfully'});
        }
    });
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});