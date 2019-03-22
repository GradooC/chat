import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";

import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../store/store";
import { fetchUsers, FetchUsers } from "../../store/searchUser/actions";
import { UserInfo } from "../../store/searchUser/types";
import { capitalize } from 'lodash';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    grow: {
      flexGrow: 1
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius * 10,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing.unit,
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 300,
        "&:focus": {
          width: 370
        }
      }
    },
    list: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    }
  });

export interface SearchUserState {
  searchValue: string;
}

export interface SearchUserProps extends WithStyles<typeof styles> {
  fetchUsers: FetchUsers;
  users: Array<UserInfo>;
}

class SearchUser extends React.Component<SearchUserProps, SearchUserState> {
  public state = {
    searchValue: ""
  };

  public componentDidMount() {
    this.props.fetchUsers();
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  public render() {
    const { classes, users } = this.props;
    const { searchValue } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          {users
            .filter(user => `${user.first_name} ${user.last_name}`.startsWith(searchValue))
            .map(user => (
            <ListItem divider={true} key={user.id}>
              <Avatar>
                <PersonIcon />
              </Avatar>
              <ListItemText
                primary={`${capitalize(user.first_name)} ${capitalize(user.last_name)}`}
                secondary={user.email}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  users: state.searchUser.users
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchUser));
