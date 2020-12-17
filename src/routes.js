import React from "react";
import { Route, Switch } from "react-router-dom";
import CalculatorPage from "./pages/Calculator";
import CellphonePage from "./pages/Cellphone";
import Partners from "./pages/Partners";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cellphone" component={CellphonePage} />
      <Route path="/partners" component={Partners} />
      <Route path="/calculator" component={CalculatorPage} />
    </Switch>
  );
};

export default Routes;
