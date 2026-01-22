const typeDefs = `
  type Query {
    users: [User]
    user(_id: ID!) : User
    quotes: [Quote]
    quotesByUser(by: ID!): [Quote]
    myProfile: User
  }

  type User {
  _id: ID!
  firstName: String!
  lastName: String
  email: String!
  quotes: [Quote]
}

  type Quote {
  _id: ID!
  quote: String!
  by: User!
}

  type Token{
    token: String!
  }

  type Mutation{
    userSignUp(userNew: UserInput!) : User
    userLogin(userSignIn: loginInput!) : Token
    createQuote(quote:String!) : String
    updateQuote(id: ID!, quote: String!): Quote
    deleteQuote(id: ID!): String
  }

  input UserInput{
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }

  input loginInput{
    email: String!
    password: String!
  }
`;

module.exports = typeDefs