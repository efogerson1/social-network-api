const users = [
    {
        username: 'John',
        email: 'john@gmail.com',
        friends: [
            'berny',
            'leah'
        ],
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

module.exports = { users, reactions }