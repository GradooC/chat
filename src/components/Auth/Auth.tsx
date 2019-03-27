import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import { Paper } from "@material-ui/core";
import {
  RouteComponentProps,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 400,
      margin: "1rem auto"
    }
  });

interface AuthProps extends RouteComponentProps, WithStyles<typeof styles> {}

const Auth: React.FunctionComponent<AuthProps> = props => {

  const { match, classes } = props;

  const handleChange = (e: React.ChangeEvent<{}>, val: string): void => {
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
            <Tab label="sign in" value={`/auth/sign-in`} />
            <Tab label="sign up" value={`/auth/sign-up`} />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path={`/auth/sign-in`} component={SignIn} />
          <Route path={`/auth/sign-up`} component={SignUp} />
        </Switch>
      </Paper>
  );
};

export default withRouter(withStyles(styles)(Auth));
