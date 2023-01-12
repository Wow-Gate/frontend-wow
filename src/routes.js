import {
  createBrowserRouter, 
} from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/auth/signin";
import SignUpPage from "./pages/auth/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/signin",
    element: <SignInPage />,
  },
  {
    path: "/auth/signup",
    element: <SignUpPage />,
  },
]);

export default router;
