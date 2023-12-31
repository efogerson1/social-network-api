const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Add to friendCount by returning friendlist length
userSchema
  .virtual('friendCount')
  .get(function () {
    if (this.friends.length){
      return this.friends.length;
    }
    
  });
  

// Init User model
const User = model('user', userSchema);

module.exports = User;