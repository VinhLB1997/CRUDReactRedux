import React from 'react';
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Menu />
        </header>
        <section className="container">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                {showRoutes(routes)}
              </Switch>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );

  function showRoutes(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
      })
    }
    return result;
  }
}

export default App;
