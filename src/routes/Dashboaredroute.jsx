import Home from "../pages/Home";
import Jopposts from "../pages/Jopposts";
import Jobdetail from "../pages/Jobdetail";
import Companies from "../pages/Companies";
import Freelancer from "../pages/Freelancer";
const dashboardRoutes = [
  { path: "/", element: <Home /> },
  { path: "/jobposts", element: <Jopposts /> },
  { path: "/jobposts/:jobId", element: <Jobdetail /> },
  { path: "/companies", element: <Companies /> },
  { path: "/freelancer", element: <Freelancer /> },
  // i wil add here all other routes
];

export default dashboardRoutes;
