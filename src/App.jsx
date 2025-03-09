import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Product from "./pages/Product";
import NotFound404 from "./pages/NotFound404";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      errorElement: <NotFound404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/card",
          element: <Card />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
