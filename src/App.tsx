import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

const Home = React.lazy(() => import('./view/home/Home'));
const Login = React.lazy(() => import('./view/login/Login'));
console.log("Home-->", Home)

class App extends React.Component {
  render() {
    return (
      <div>
        <div>This is TS</div>
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Login" component={Login} />
          </Switch> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Login" component={Login} />
            </Switch>
          </Suspense>
        </HashRouter>
      </div>

    )
  }
}

export default App