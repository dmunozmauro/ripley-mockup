import React from "react";
import routes from './routers';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProfileFunctionalities: []
    }
    console.log('App: ', props);
  }


  render() {
    const RouteWithSubRoutes = (route) => (
      <Route path={route.path} exact={route.exact} key={`route${route.path}`} render={(props) => (
        <route.component {...props} routes={route.routes} render={() => (console.log('AQUII'))} />
      )} />
    )

    return (
      <Router>
        <Switch>
          {
            routes.map((route) => (
              <RouteWithSubRoutes key={route.path} {...route} exact />
            ))
          }
        </Switch>
      </Router>

    );
  }
}

export default App;
