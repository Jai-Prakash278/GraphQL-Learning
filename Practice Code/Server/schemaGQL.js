const typeDefs = `
  type Query {
    users: [User]
    user(id: ID!) : User
    quotes: [Quote]
    quotesByUser(by: ID!): [Quote]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    quotes: [Quote]
  }

  type Quote {
    quote: String!
    by: ID
  }

  type Mutation{
    userDummy(userNew: UserInput!) : User
  }

  input UserInput{
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }
`;

module.exports = typeDefs