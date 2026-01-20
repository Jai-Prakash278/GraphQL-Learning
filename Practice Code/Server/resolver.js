const { users, quotes } = require('./fakedb');
// const { randomBytes } = require('bcrypt');
const { randomBytes } = require('crypto');

const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find((user) => user.id === id),
        quotes: () => quotes,
        quotesByUser: (_, { by }) => quotes.filter(q => q.by === by),
    },
    User: {
        quotes: (user) => quotes.filter((quote) => quote.by === user.id),
    },
    Mutation: {
        userDummy: (_, { userNew }) => {
            const id = randomBytes(5).toString("hex");

            const newUser = {
                id,
                ...userNew,
            };

            users.push(newUser);
            return newUser;
        }
    }
};

module.exports = resolvers;