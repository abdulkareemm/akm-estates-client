import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home,Layout,List } from "./routes";
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
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
