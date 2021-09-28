import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form";
import withEvaluation from "./hocs/withEvaluation";
import withRegistration from "./hocs/withRegistration";
import withLogin from "./hocs/withLogin";

function App() {
  const EvaluationForm = withEvaluation(Form);
  const RegistrationForm = withRegistration(Form);
  const LoginForm = withLogin(Form);

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" exact component={RegistrationForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/evaluation" component={EvaluationForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
