import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

function Routes(): any {
  return (
    <BrowserRouter>
      <Route path="/" component={SignIn} exact />
      <Route path="/registro" component={SignUp} />
      <Route path="/inicio" component={Dashboard} />
    </BrowserRouter>
  );
}

export default Routes;
