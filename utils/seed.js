const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, reactions, thoughts } = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    console.log('created Social Network API database');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    await connection.close()

    // Possibly add .dropCollection if running into seeding/population issues

})