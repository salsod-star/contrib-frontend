import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import App from "./App";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
