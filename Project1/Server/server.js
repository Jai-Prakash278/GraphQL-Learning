// External Modules
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken')


// Internal Modules
const connectDB = require("./config/connectionDB");
const resolvers = require('./QLcode/resolver');
const typeDefs = require('./QLcode/schemaGQL');
const { getUserFromToken } = require("./middleware/auth");




const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const PORT = process.env.PORT || 3000;

(async () => {
    await connectDB();

    startStandaloneServer(server, {
        listen: { port: PORT },
        context: async ({ req }) => {
            const userId = getUserFromToken(req);
            return { userId };
        },
    }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})();
