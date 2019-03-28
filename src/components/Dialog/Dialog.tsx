import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../store/store";
import { bindActionCreators } from "redux";
import { fetchMessages, FetchMessagesType } from "../../store/dialog/actions";
import { MessageInfo, MessagesActions } from "../../store/dialog/types";
import MyPhrase from "./MyPhrase";
import TheirPhrase from "./TheirPhrase";
import { createSelector } from "reselect";
import { UserInfo } from "../../store/searchUser/types";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1000,
      margin: '0 auto'
    }
  });

interface MessageWithAuthor extends MessageInfo {
  userName: string;
}

export interface DialogState {}

export interface DialogProps extends WithStyles<typeof styles> {
  fetchMessages: FetchMessagesType;
  messages: Array<MessageWithAuthor>;
}

class Dialog extends React.Component<DialogProps, DialogState> {
  public componentDidMount() {
    this.props.fetchMessages();
  }

  public render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.root}>
      {messages.map(message =>
        message.user_id === 1 ? ( // user_id - предварительный.
          <MyPhrase item={message} />
        ) : (
          <TheirPhrase item={message} />
        )
      )}
      </div>
    );
  }
}

const getMessageWithAuthor = createSelector<
  AppState,
  Array<MessageInfo>,
  Array<UserInfo>,
  Array<MessageWithAuthor>
>(
  state => state.messages.messages,
  state => state.users.users,
  (messages, users) =>
    messages.map(message => {
      const messageAuthor = users.find(user => user.id === message.user_id);
      const authorFullName = messageAuthor
        ? `${messageAuthor.first_name} ${messageAuthor.last_name}`
        : "";
      return { ...message, userName: authorFullName };
    })
);

const mapStateToProps = (state: AppState) => ({
  messages: getMessageWithAuthor(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, MessagesActions>
) => bindActionCreators({ fetchMessages }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dialog));
