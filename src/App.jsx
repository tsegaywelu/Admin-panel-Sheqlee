import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Authroute from "./routes/Authroute.jsx";
import dashboardRoutes from "./routes/Dashboaredroute.jsx";
import { LeftDashboared } from "./componnets/basecomponents/LeftDashboared";
const App = () => {
  return (
    <div className=" font-kantumruy">
      <BrowserRouter>
        <Routes>
          {/* Map through Auth Routes */}
          {Authroute.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          <Route
            path="/"
            element={
              <div className="bg-custom-slate flex gap-4 w-full">
                {/* Left Sidebar */}
                <LeftDashboared />
                {/* Right Content */}
                <div className="w-full">
                  <Outlet />
                </div>
              </div>
            }
          >
            {/* Map through Dashboard Routes */}
            {dashboardRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
