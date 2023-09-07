const { Thought, User} = require("../models");

module.exports = {
    //Fund all thoughts
    getThoughts(req, res){
        Thought.find()
        .then((thoughts)=> res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },


    //Find thoughts by ID
    getThoughtById(req, res) {
        Thought.findOne({_id: req.params.ThoughtId})
        .select('-__v')
        .then((thought)=>
        !thought
                ? res.status(404).json({message: "No Thoughts with that ID"})
                : res.json(thought)
        )
        .catch((err)=> res.status(500).json(err));
    },

    // Create thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought)=> {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            )
        })
    .then((thought)=> {
        !user
            ? res.status(404).json({
                message: 'Thought created, no user found with that ID'
            })
            : res.json(user)
    })
    .catch((err) => res.status(500).json(err))
},
// Update thought
updateThought(req, res) {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$set: req.body},
        {runValidators: true, new: true}
    )
        .then((thought)=>
            !thought
                    ? res.status(404).json({message: 'No thought with this ID'})
                    : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
},

// Delete thought by ID
deleteThought(req, res) {
    Thought.findOneAndDelete({_id: req.params.thoughtId})
    .then((thought) => {
        !thought
                ? res.status(404).json({message: 'No thought with this ID'})
                : res.json(thought)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
},

// Create new reaction to thought with ID
createReaction(req, res){
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addtoset: { reactions: req.body}},
        {runValidators: true}
    )
        .then((thought)=>
        !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
)
.catch((err) => res.status(500).json(err));
},

// Remove reaction from a thought using ID
removeReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
        { runValidators: true, new: true }
    )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
}

}