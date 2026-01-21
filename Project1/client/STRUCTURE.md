# Project Structure

## Directory Layout

```
client/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout.jsx    # Main layout with Navbar and Outlet
│   │   └── Navbar.jsx    # Navigation component
│   ├── pages/           # Page components (routes)
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── CreateQuote.jsx
│   │   └── index.js     # Barrel export for cleaner imports
│   ├── App.jsx          # Main app with router configuration
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
└── index.html           # HTML template
```

## Routing Structure

The app uses React Router v7 with `createBrowserRouter` and nested routes:

- **Layout Component**: Wraps all routes with Navbar and provides `<Outlet />` for child routes
- **Nested Routes**: All pages are children of the Layout route
- **Index Route**: Home page is the default route at "/"

## Key Features

- ✅ Modern routing with `createBrowserRouter`
- ✅ Layout component with `Outlet` pattern
- ✅ All pages properly organized in `src/pages`
- ✅ Clean barrel exports from `pages/index.js`
- ✅ Tailwind CSS styling throughout
- ✅ Responsive design with mobile support
