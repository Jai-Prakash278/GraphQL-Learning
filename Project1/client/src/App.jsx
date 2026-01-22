import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Login, SignUp, CreateQuote, Profile } from "./pages";
import OtherUserProfile from "./pages/OtherUserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "create",
        element: <CreateQuote />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/:userId",
        element: <OtherUserProfile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
