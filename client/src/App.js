import React from "react";

import {
  // Router,
  Route,
  Switch
} from "react-router-dom";

import indexRoutes from "../src/routes/index";
//import * as service from "../../service/AuthenticationService";
import CreateProfile from "./components/CreateProfile";

//import Login from "../../components/Authentication/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }
  componentDidMount = () => {
    // service
    //   .current()
    //   .then(this.getCurrentSuccsess)
    //   .catch(this.getCurrentError);
  };
  getCurrentSuccsess = response => {
    this.setState({ currentUser: response.data });
  };
  getCurrentError = response => {};

  render() {
    return this.state.currentUser == null ? (
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    ) : (
      <Switch>
        <Route path={"/"} key={0} exact component={CreateProfile} />
        {/* <Route path={"/"} key={0} exact component={UserPage} /> */}
      </Switch>
    );
  }
}

export default App;
