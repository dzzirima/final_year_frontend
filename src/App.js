import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import { routes } from "./Routes/routes";
import { useLocation } from "react-router-dom";

import { UserContextProvider, useUserContext } from "./context/userContext";
import ProtectedRoute from "./pages/ProtectedPage/Protected";
import { ProtectedPage } from "./pages/ProtectedPage/ProtetedPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const {user,loginStatus} = useUserContext() 
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route key={index} exact path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>

           {/* proctected routes */}
           <ProtectedRoute path  ="/protect" component={ProtectedPage} auth={loginStatus}/>


        </div>
        <ToastContainer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
