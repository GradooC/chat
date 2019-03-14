import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import classes from "./Auth.module.css";
import { Paper } from "@material-ui/core";
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

interface AuthProps extends RouteComponentProps {}

const Auth: React.FunctionComponent<AuthProps> = props => {
  const { match } = props;

  const handleChange = (e: React.ChangeEvent<{}>, val: string) => {
    props.history.push(`${val}`);
  };

  return (
      <Paper className={classes.root} elevation={20}>
        <AppBar position="static" color="default">
          <Tabs
            value={props.history.location.pathname}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="sign in" value={`${match.url}/sign-in`} />
            <Tab label="sign up" value={`${match.url}/sign-up`} />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path={`${match.url}/sign-in`} component={SignIn} />
          <Route path={`${match.url}/sign-up`} component={SignUp} />
        </Switch>
      </Paper>
  );
};


export default withRouter(Auth);