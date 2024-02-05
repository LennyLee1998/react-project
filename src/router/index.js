import { Navigate } from "react-router-dom";

import Home from "@/views/home";
import Entire from "@/views/entire";
import Detail from "@/views/detail";
import NotFound from "@/views/not-found";

const routes = [
  // redirect
  {
    path: "/",
    element: <Navigate to="home"/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
