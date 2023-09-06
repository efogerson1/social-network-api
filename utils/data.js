const users = [
    {
        username: 'Abenezer',
        email: 'abenezer@gmail.com',
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
        username: 'Cathy',
        email: 'cathy@gmail.com',
        friends: [],
        thoughts: []
    },
]

const reactions = [
    {
        reactionBody: 'test1',
        username: 'Abenezer'
    },
    {
        reactionBody: 'test2',
        username: 'Brendon'
    },
    {
        reactionBody: 'test3',
        username: 'Cathy'
    },
    {
        reactionBody: 'test4',
        username: 'Deren'
    },
]

module.exports = { users, reactions }