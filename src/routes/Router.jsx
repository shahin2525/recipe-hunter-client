import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

import Details from "../layouts/Details";
import ViewDetails from "../pages/components/ViewDetails";
import ErrorPage from "../pages/components/ErrorPage";

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
]);

export default router;
