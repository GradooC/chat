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
import {
  fetchMessages,
  FetchMessagesType,
  sendMessage,
  SendMessageType
} from "../../store/dialog/actions";
import {
  MessageInfo,
  MessagesActions,
  MessageWithAuthor
} from "../../store/dialog/types";
import MyPhrase from "./MyPhrase";
import TheirPhrase from "./TheirPhrase";
import { createSelector } from "reselect";
import { UserInfo } from "../../store/searchUser/types";
import InputBase from "@material-ui/core/InputBase";
import ArrowForward from "@material-ui/icons/ArrowForwardIosRounded";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: theme.spacing.unit * 110,
      marginLeft: "auto",
      marginRight: "auto",
    },
    messages: {
      minHeight: '90vh'
    },
    messageInput: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.primary.dark,
      position: "sticky",
      bottom: 0,
      width: '100%',
      borderRadius: theme.shape.borderRadius,
    },
    inputRoot: {
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 10,
      width: "50%",
      color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    iconRoot: {
      fontSize: theme.spacing.unit * 5
    },
    buttonRoot: {
      marginRight: theme.spacing.unit * 4,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
      padding: theme.spacing.unit
    }
  });

export interface DialogState {
  text: string;
}

export interface DialogProps extends WithStyles<typeof styles> {
  fetchMessages: FetchMessagesType;
  sendMessage: SendMessageType;
  messages: Array<MessageWithAuthor>;
  myUserId: number;
}

class Dialog extends React.Component<DialogProps, DialogState> {

  messagesEndRef: any;  // TEST

  public state = {
    text: ""
  };

  public componentDidUpdate() {
    this.messagesEndRef.scrollIntoView({ behavior: "smooth" });
  }

  public componentDidMount() {
    this.props.fetchMessages();
    this.messagesEndRef.scrollIntoView({ behavior: "smooth" });
  }

  private handleInputButton = () => {
    const { text } = this.state;
    const time = new Date().toTimeString().replace(/(\d{2}:\d{2}).*/, '$1');
    this.props.sendMessage({ text, time, user_id: this.props.myUserId });
    
    this.setState({ text: "" });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  public render() {
    const { classes, messages, myUserId } = this.props;
    const { text } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.messages}>
          {messages.map(message =>
            message.user_id === myUserId ? (
              <MyPhrase item={message} key={message.time} /> // key - TEST
            ) : (
              <TheirPhrase item={message} key={message.time} /> // key - TEST
            )
          )}
        </div>
        <div ref={el => this.messagesEndRef = el}></div>
        <div className={classes.messageInput}>
            <InputBase
              multiline
              value={text}
              placeholder="Enter your message"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={this.handleInputChange}
            />
            {text ? (
              <IconButton
                classes={{ root: classes.buttonRoot }}
                onClick={this.handleInputButton}
              >
                <ArrowForward classes={{ root: classes.iconRoot }} />
              </IconButton>
            ) : null}
        </div>
      </div>
    );
  }
}

const getMessagesWithAuthor = createSelector<
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
      const authorFirstName = messageAuthor ? messageAuthor.first_name : "";
      const authorLastName = messageAuthor ? messageAuthor.last_name : "";
      const authorAvatar = messageAuthor ? messageAuthor.avatar : null;

      return {
        ...message,
        firstName: authorFirstName,
        lastName: authorLastName,
        avatar: authorAvatar
      };
    })
);

const mapStateToProps = (state: AppState) => ({
  messages: getMessagesWithAuthor(state),
  myUserId: state.auth.myUserId
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, MessagesActions>
) => bindActionCreators({ fetchMessages, sendMessage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dialog));
