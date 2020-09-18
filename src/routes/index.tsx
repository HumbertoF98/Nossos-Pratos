import React from "react";

import { Route, BrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={SignIn} exact />
    <Route path="/inicio" component={Dashboard} />
  </BrowserRouter>
);

export default Routes;
