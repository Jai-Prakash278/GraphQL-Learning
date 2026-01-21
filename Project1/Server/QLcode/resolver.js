
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const Quote = require("../models/quoteModel")
const jwt = require('jsonwebtoken')

const resolvers = {
    Query: {
        users: async () => await User.find({}),
        user: async (_, { _id }) => await User.findOne({ _id }),
        quotes: async () =>
            await Quote.find({}).populate("by", "_id firstName"),
        quotesByUser: async (_, { by }) =>
            await Quote.find({ by }).populate("by", "_id firstName"),
    },
    User: {
        quotes: async (user) => await Quote.find({ by: user._id }),
    },
    Mutation: {
        userSignUp: async (_, { userNew }) => {
            const user = await User.findOne({ email: userNew.email })

            if (user) {
                throw new Error("User already exists!")
            }

            const hashedPassword = await bcrypt.hash(userNew.password, 12);

            const newUser = new User({
                ...userNew,
                password: hashedPassword
            })
            return await newUser.save();
        },
        userLogin: async (_, { userSignIn }) => {
            const user = await User.findOne({ email: userSignIn.email });

            if (!user) {
                throw new Error("User doesn't exists!");
            }

            const matchPassword = await bcrypt.compare(userSignIn.password, user.password)

            if (!matchPassword) {
                throw new Error("Invalid Credentials")
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            return { token }
        },
        createQuote: async (_, { quote }, { userId }) => {
            if (!userId) {
                throw new Error("You must be logged In!")
            }
            const newQuote = new Quote({
                quote,
                by: userId
            })
            await newQuote.save()
            return "Quote saved successfully."
        }
    }
};

module.exports = resolvers;