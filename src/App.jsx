import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/Layout";

import {
  Home,
  List,
  Login,
  Profile,
  Register,
  SinglePage,
  UpdateProfile,
  NewPost,
} from "./routes";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
          loader:listPageLoader
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader:profilePageLoader
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
        { path: "/new-post", element: <NewPost /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
