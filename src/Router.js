import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

const Loading = <span>Loading...</span>;

export default function Router() {
  return <>
    <React.Suspense fallback={Loading}>
      <HashRouter hashType="slash">
        <Switch>
          <Route path="/" exact render={() => <Home uselessProp={1} />} />
          <Route path="/about" render={() => <About uselessProp={1} />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter >
    </React.Suspense>
  </>
}