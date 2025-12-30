import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import Contact from "../Page/Services/Services";
import Profile from "../Page/Profile/Profile";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../Page/Services/Services";
import ForgotPassword from "../Page/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/reset-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
