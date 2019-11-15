import React, { /*lazy ,*/ Suspense } from "react";
// import { HashRouter, Route, Link, Switch } from "react-router-dom";
// import style from "./App.scss"
import "@src/assets/css/reset.css"
const Home = React.lazy(() => import("./view/home/Home"));
const Login = React.lazy(() => import("@src/view/login/Login"));

class App extends React.Component {
  render() {
    return (
      <div>
        <div>This is TS</div>
        <Suspense fallback={<div>Loading...</div>}>
          <Home name="XXX" age={123} />
        </Suspense>
        {/* <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Login" component={Login} />
            </Switch>
        </HashRouter> */}
      </div>
    )
  }
}

export default App