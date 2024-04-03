import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout,RequireAuth} from "./routes/layout/Layout"



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
        },
        {
          path: "/:id",
          element: <SinglePage />,
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
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
        {path:"/new-post",
      element: <NewPost />}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
