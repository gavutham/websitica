import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Ohh oh! Page not Found!</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
