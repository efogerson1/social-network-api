const {User} = require('../models');

module.exports = {

//find all users
async getUsers(req, res){
    try { 
        const userData = await User.find();
        res.json(userData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    // User.find()
    // .then((users)=>res.json(users))
    // .catch((err)=> res.status(500).json(err))
},

//find users by ID

getSingleUser(req, res){
    User.findOne({_id: req.params.UserId})
    .select('-__v')
    .then((user)=>
    !user
        ? res.status(404).json({message: 'No user with that ID found'})
        : res.json(user))
        .catch((err)=> res.status(500).json(err));
},

// create new user
createUser(req, res){
    User.create(req.body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err)=> res.status(500).json(err));
},


//update a user
updateUser(req, res) {
    User.findOneAndUpdate(
        {_id: req.params.UserId},
        {$set: req.body},
        {runValidators: true, new: true}
    )
        .then((user) =>
        !user
            ? res.status(404).json({message: 'No user with this id found'})
            : res.json(user))
        .catch((err)=> {
            console.log(err);
            res.status(500).json(err);
        })
},

// Delete a user by ID

deleteUser(req, res) {
    User.findOneAndDelete({_id: req.params.userId})
        .then((user) => {
            !user
                ? res.status(404).json({message: "No user with this ID"})
                : res.json(user)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
},

// Add friend to user

addFriend(req, res){
    User.findOneAndUpdate(
        {_id: req.params.UserId},
        {$addToSet: {friends : req.params.friendId}},
        {new: true}
    )
        .then((user)=>
        !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
},

//remove friend from friendslist

removeFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
    )
        .then((user) =>
            !user
                ? res.status(404).json({
                    message: 'User not found',
                })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
}
}