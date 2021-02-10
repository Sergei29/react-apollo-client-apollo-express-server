import React, { useState } from "react";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { isLoggedIn, logout } from "./utils/auth";
import CompanyDetail from "./components/CompanyDetail";
import LoginForm from "./components/LoginForm";
import JobBoard from "./components/JobBoard";
import JobDetail from "./components/JobDetail";
import JobForm from "./components/JobForm";
import NavBar from "./components/NavBar";

type StateType = { loggedIn: boolean };
type Props = RouteComponentProps;

const App = ({ history }: Props): JSX.Element => {
  const [state, setState] = useState<StateType>({
    loggedIn: isLoggedIn(),
  });
  const { loggedIn } = state;

  const handleLogin = () => {
    setState(() => ({
      loggedIn: true,
    }));
    history.push("/");
  };

  const handleLogout = () => {
    logout();
    setState(() => ({
      loggedIn: false,
    }));
    history.push("/");
  };

  return (
    <div>
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <section className="section">
        <div className="container">
          <Switch>
            <Route exact path="/" component={JobBoard} />
            <Route path="/companies/:companyId" component={CompanyDetail} />
            <Route exact path="/jobs/new" component={JobForm} />
            <Route path="/jobs/:jobId" component={JobDetail} />
            <Route
              exact
              path="/login"
              render={() => <LoginForm onLogin={handleLogin} />}
            />
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default withRouter(App);
