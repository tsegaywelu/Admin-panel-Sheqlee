import Home from "../pages/Home";
import Jopposts from "../pages/Jopposts";
import Jobdetail from "../pages/Jobdetail";
import Companies from "../pages/Companies";
import Freelancer from "../pages/Freelancer";
import Categories from "../pages/Categories";
import Addcategory from "../pages/Addcategory";
import Updatecategory from "../pages/Updatecategory";
import Tags from "../pages/Tags";
import Updatetag from "../pages/Updatetag";
import Addtag from "../pages/Addtag";
import Users from "../pages/Users";
import Adduser from "../pages/Adduser";
import Subscribers from "../pages/Subscribers";
import Systemconfig from "../pages/Systemconfig";
const dashboardRoutes = [
  { path: "/", element: <Home /> },
  { path: "/jobposts", element: <Jopposts /> },
  { path: "/jobposts/:jobId", element: <Jobdetail /> },
  { path: "/companies", element: <Companies /> },
  { path: "/freelancer", element: <Freelancer /> },
  { path: "/categories", element: <Categories /> },
  { path: "/categories/addcategory", element: <Addcategory /> },
  { path: "/categories/:categoryId", element: <Updatecategory /> },
  { path: "/tags", element: <Tags /> },
  { path: "/tags/:tagId", element: <Updatetag /> },
  { path: "/tags/addtag", element: <Addtag /> },
  { path: "/users", element: <Users /> },
  { path: "/users/adduser", element: <Adduser /> },
  { path: "/subscribers", element: <Subscribers /> },
  { path: "/systemconfig", element: <Systemconfig /> },

  // i wil add here all other routes
];

export default dashboardRoutes;
