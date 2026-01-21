# GraphQL Project - Issues Fixed

## 🔍 Problems Identified

### 1. **Home.jsx - Missing Return Statement**
**Problem:** The `.map()` function on line 15 was missing a `return` statement, causing nothing to render.
```javascript
// ❌ BEFORE (Wrong)
{data.quotes.map((quote) => {
  <blockquote>...</blockquote>;
})}

// ✅ AFTER (Correct)
{data.quotes.map((quote) => (
  <blockquote key={quote.by._id}>...</blockquote>
))}
```

### 2. **Home.jsx - Incorrect Data Access**
**Problem:** Trying to access `quote.firstName` but the GraphQL schema returns `quote.by.firstName`.
```javascript
// ❌ BEFORE
~{quote.firstName}

// ✅ AFTER
~{quote.by.firstName}
```

### 3. **Missing Authentication Token in Requests**
**Problem:** Apollo Client wasn't sending the JWT token with requests, so protected mutations (like `createQuote`) would fail.
**Solution:** Added `authLink` middleware to Apollo Client to automatically include the Bearer token from localStorage in all requests.

### 4. **No GraphQL Integration in Forms**
**Problem:** Login, SignUp, and CreateQuote forms were just console logging data instead of using GraphQL mutations.
**Solution:** Integrated `useMutation` hooks with proper error handling and loading states.

### 5. **Poor Error Handling**
**Problem:** Errors were only logged to console, users couldn't see what went wrong.
**Solution:** Added visible error messages with styled error boxes for all mutations and queries.

---

## ✅ Fixes Applied

### **1. Client Setup (main.jsx)**
```javascript
// Added authentication middleware
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
```

### **2. GraphQL Mutations File Created**
Created `client/src/gqlOperations/mutations.js` with:
- `SIGNUP_USER` - User registration mutation
- `LOGIN_USER` - User login mutation  
- `CREATE_QUOTE` - Create quote mutation (requires auth)

### **3. Updated All Form Pages**

#### **Login.jsx**
- ✅ Uses `LOGIN_USER` mutation
- ✅ Stores JWT token in localStorage on success
- ✅ Navigates to home page after login
- ✅ Shows error messages
- ✅ Disabled button during loading

#### **SignUp.jsx**
- ✅ Uses `SIGNUP_USER` mutation
- ✅ Navigates to login page after successful signup
- ✅ Shows error messages
- ✅ Disabled button during loading

#### **CreateQuote.jsx**
- ✅ Uses `CREATE_QUOTE` mutation
- ✅ Checks for auth token before submitting
- ✅ Refetches quotes after creation
- ✅ Shows error messages
- ✅ Disabled button during loading

#### **Home.jsx**
- ✅ Fixed map() return statement
- ✅ Fixed data access (quote.by.firstName)
- ✅ Added loading state
- ✅ Added error display
- ✅ Added empty state handling
- ✅ Added unique keys to mapped elements

---

## 🚀 How to Run the Project

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

## 🔐 Authentication Flow

1. **Sign Up** → Creates user in MongoDB → Redirects to Login
2. **Login** → Returns JWT token → Stores in localStorage → Redirects to Home
3. **Create Quote** → Checks for token → Sends with Authorization header → Creates quote with user ID

---

## 📊 GraphQL Schema Overview

### **Queries**
- `users` - Get all users
- `user(_id: ID!)` - Get user by ID
- `quotes` - Get all quotes
- `quotesByUser(by: ID!)` - Get quotes by user

### **Mutations**
- `userSignUp(userNew: UserInput!)` - Create new user
- `userLogin(userSignIn: loginInput!)` - Login and get token
- `createQuote(quote: String!)` - Create quote (requires auth)

---

## 🎨 UI Improvements

All pages now have:
- ✅ Loading states with styled messages
- ✅ Error messages in red alert boxes
- ✅ Disabled buttons during submission
- ✅ Smooth animations and transitions
- ✅ Proper empty state handling

---

## 📝 Environment Variables

**Server/.env**
```
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
```

---

## ✨ What Works Now

1. ✅ User can sign up
2. ✅ User can login and get JWT token
3. ✅ Token is automatically sent with all requests
4. ✅ User can create quotes (when logged in)
5. ✅ Home page displays all quotes from database
6. ✅ Proper error handling throughout
7. ✅ Loading states on all async operations
8. ✅ Beautiful, animated UI with Tailwind CSS

---

## 🔧 Testing the App

1. **Sign Up**: Go to `/signUp` and create an account
2. **Login**: Go to `/login` with your credentials
3. **Create Quote**: Go to `/create` and add a quote (must be logged in)
4. **View Quotes**: Go to `/` to see all quotes

---

## 🐛 Debugging Tips

If queries still don't work:

1. **Check Server is Running**: Make sure MongoDB is connected
2. **Check Network Tab**: Inspect GraphQL requests in browser DevTools
3. **Check Token**: Verify JWT token in localStorage
4. **Check Console**: Look for GraphQL errors in console
5. **Test in GraphQL Playground**: Go to `http://localhost:5000/` to test queries directly

---

## 📦 Dependencies Added

**Client:**
- ✅ @apollo/client (already installed)
- ✅ @apollo/client/link/context (for auth middleware)
- ✅ graphql (already installed)

**Server:**
- ✅ All dependencies already installed

---

All issues are now fixed and the application should work correctly! 🎉
