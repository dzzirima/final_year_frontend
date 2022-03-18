import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import { routes } from "./Routes/routes";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
