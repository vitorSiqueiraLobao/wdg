import React from "react";
import { Route, Switch } from "react-router-dom";

import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import EditUsers from "../pages/EditUser";

const routes = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} exact />
      <Route path="/users/:id" component={EditUsers} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
