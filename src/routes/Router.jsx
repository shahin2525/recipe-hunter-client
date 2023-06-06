import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

import Details from "../layouts/Details";
import ViewDetails from "../pages/components/ViewDetails";
import ErrorPage from "../pages/components/ErrorPage";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/components/Login";

import RegisterLayout from "../layouts/RegisterLayout";
import Register from "../pages/components/Register";
import BlogLayout from "../layouts/BlogLayout";
import Blog from "../pages/components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/details",
    element: <Details></Details>,
    children: [
      {
        path: ":id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/chefs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout></RegisterLayout>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout></BlogLayout>,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
