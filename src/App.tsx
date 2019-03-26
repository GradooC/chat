import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import SearchUser from "./components/SearchUser/SearchUser";
import ChatList from "./components/ChatList/ChatList";
import Dialog from "./components/Dialog/Dialog";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";
import { AppState } from "./store/store";
import { authCheckStatus, AuthCheckStatus } from "./store/auth/actions";
import { ThunkDispatch } from "redux-thunk";
import Logout from "./components/Auth/Logout/Logout";

export interface AppState {}

export interface AppProps {
  isSignIn: boolean;
  onTryAutoSignup: AuthCheckStatus;
}

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    const { isSignIn } = this.props;

    const routes = isSignIn ? (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/search" component={SearchUser} />
        <Route path="/chats" component={ChatList} />
        <Route path="/dialog" component={Dialog} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={ChatList} />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
        <Route path="/auth/sign-in" exact component={Auth} />
        <Route path="/auth/sign-up" exact component={Auth} />
        <Redirect to="/auth/sign-in" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isSignIn: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  onTryAutoSignup: () => dispatch(authCheckStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
