import Login from "../pages/Login";
import Resetpassword from "../pages/Resetpassword";
import Intercode from "../pages/Intercode";

const Authroute = [
  { path: "/login", element: <Login /> },
  { path: "/reset password", element: <Resetpassword /> },
  { path: "/reset password/intercode", element: <Intercode /> },
];

export default Authroute;
