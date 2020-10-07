import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Sites from "./components/Sites";
import Cookies from "./components/Cookies";
import AddSite from "./components/Add/AddSite";
import AddCookie from "./components/Add/AddCookie";
import "./styles.css";
import { connect } from 'react-redux';
import NotFound from './components/Admin/NotFound';
import LoginAdmin from "./components/Admin/LoginAdmin";

class App extends React.Component {
  withAuth = (Component) => {
    const { token } = this.props;
    //const RedirectToError = () => (<Redirect to="/error" />);
    //return (token != null ? Component : RedirectToError);
  };

  render () {
    //const {withAuth} = this;
    return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/AddCookie" component={AddCookie} />
          <Route path="/AddSite" component={AddSite} />
          <Route path="/Cookies" component={Cookies} />
          <Route path="/Sites" component={Sites} />
          <Route path="/LoginAdmin" component={LoginAdmin} />
          <Route path="/erreur" component={NotFound} />
          <Route path="/" component={Home} />

        </Switch>
      </Router>
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});
export default connect(mapStateToProps)(App);


