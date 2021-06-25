import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Records from "./components/records/Records";
import NotFound from "./components/NotFound";
import NewRecord from "./components/records/NewRecord";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/records/new" component={NewRecord} />
            <Route path="/records/:page?" component={Records} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
