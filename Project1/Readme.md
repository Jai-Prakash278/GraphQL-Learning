
##How to Run the Project

### **1. Start the Server**
```bash
cd Server
npm install
npm run dev
```
Server runs on: `http://localhost:5000`

### **2. Start the Client**
```bash
cd client
npm install
npm run dev
```
Client runs on: `http://localhost:5173` (Vite default)

---

##Authentication Flow

1. Sign Up → Creates user in MongoDB → Redirects to Login
2. Login → Returns JWT token → Stores in localStorage → Redirects to Home
3. Create Quote → Checks for token → Sends with Authorization header → Creates quote with user ID

---

##GraphQL Schema Overview

###Queries
- `users` - Get all users
- `user(_id: ID!)` - Get user by ID
- `quotes` - Get all quotes
- `quotesByUser(by: ID!)` - Get quotes by user
- `myProfile` - Fetches the currently logged-in user’s profile.

###Mutations
- `userSignUp(userNew: UserInput!)` - Create new user
- `userLogin(userSignIn: loginInput!)` - Login and get token
- `createQuote(quote: String!)` - Create quote (requires auth)
- `updateQuote(id: ID!, quote: String!)` - Updates an existing quote.
- `deleteQuote(id: ID!)` - Deletes a quote permanently.
---


##Environment Variables

**Server/.env**
```
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
```

---

##Testing the App

1. **Sign Up**: Go to `/signUp` and create an account
2. **Login**: Go to `/login` with your credentials
3. **Create Quote**: Go to `/create` and add a quote (must be logged in)
4. **View Quotes**: Go to `/` to see all quotes
5. **Edit Quotes**: Go to `/create` edit a quote (must be logged in)
6. **View Profile**: Go to `/profile` to see logged in user profile
7. **View Others Profile**: Go to `/profile/:userId` to see Others profile

---
