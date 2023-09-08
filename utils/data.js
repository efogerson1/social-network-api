const users = [
    {
        username: 'John',
        email: 'john@gmail.com',
        friends: [],
        thoughts: [],
    },
    {
        username: 'Brendon',
        email: 'brendon@gmail.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'Eric',
        email: 'eric@gmail.com',
        friends: [],
        thoughts: []
    },
]

const reactions = [
    {
        reactionBody: 'test1',
        username: 'John'
    },
    {
        reactionBody: 'test2',
        username: 'Brendon'
    },
    {
        reactionBody: 'test3',
        username: 'Eric'
    },
    {
        reactionBody: 'test4',
        username: 'Deren'
    },
]

const thoughts = [
    {
        thoughtText:"Cool stuff",
        username: "John",
        reactions: [reactions[1], reactions[2]]
    },

    {
        thoughtText:"More cool things",
        username: "Eric",
        reactions: [reactions[0], reactions[3]]
    }

]

module.exports = { users, reactions, thoughts }