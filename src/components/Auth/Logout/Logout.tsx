import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles, Theme, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { AppState } from "../../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { Typography } from "@material-ui/core";
import { onLogout, OnLogout } from "../../../store/auth/actions";

export interface LogoutState {}

export interface LogoutProps extends WithStyles<typeof styles> {
  logout: OnLogout;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  });

class Logout extends React.Component<LogoutProps, LogoutState> {
  private handleLogoutButton = (): void => {
    this.props.logout();
  };

  public render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h2" gutterBottom>
          You are signed in
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={this.handleLogoutButton}
        >
          Logout
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  logout: () => dispatch(onLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Logout));
