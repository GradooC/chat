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
import uuid from "uuid/v4";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: theme.spacing.unit * 110,
      marginLeft: "auto",
      marginRight: "auto"
    },
    messages: {
      minHeight: "90vh"
    },
    messageInput: {
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.primary.dark,
      position: "sticky",
      bottom: 0,
      width: "100%",
      borderRadius: theme.shape.borderRadius
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
  private messagesEndRef = React.createRef<HTMLDivElement>();

  public state = {
    text: ""
  };

  public componentDidUpdate() {
    const node = this.messagesEndRef.current;
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }

  public componentDidMount() {
    this.props.fetchMessages();

    const node = this.messagesEndRef.current;
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }

  private handleInputButton = () => {
    const { text } = this.state;
    const date = new Date().toISOString();
    const id = uuid();
    this.props.sendMessage({ id, user_id: this.props.myUserId, text, date });

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
              <MyPhrase item={message} key={message.id} />
            ) : (
              <TheirPhrase item={message} key={message.id} />
            )
          )}
        </div>
        <div ref={this.messagesEndRef} />
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

interface ThisDialogUsers {
  [key: number]: UserInfo | null;
}

const compareByDate = (a: MessageInfo, b: MessageInfo) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
}

const getMessagesWithAuthor = createSelector<
  AppState,
  Array<MessageInfo>,
  Array<UserInfo>,
  Array<MessageWithAuthor>
>(
  state => state.messages.messages,
  state => state.users.users,
  (messages, users) => {
    const thisDialogUsers: ThisDialogUsers = {};
    const author: Pick<UserInfo, 'first_name' | 'last_name' | 'avatar'> = {
      first_name: '',
      last_name: '',
      avatar: null
    };
    const sortedByDateMessages = messages.sort(compareByDate);
    return sortedByDateMessages.map(message => {
      console.log(message.date);
      const thisDialogUser = thisDialogUsers[message.user_id];
      if (thisDialogUser) {
        author.first_name = thisDialogUser.first_name;
        author.last_name = thisDialogUser.last_name;
        author.avatar = thisDialogUser.avatar;
      } else {
        const messageAuthor = users.find(user => user.id === message.user_id);

        author.first_name = messageAuthor ? messageAuthor.first_name : "";
        author.last_name = messageAuthor ? messageAuthor.last_name : "";
        author.avatar = messageAuthor ? messageAuthor.avatar : null;

        thisDialogUsers[message.user_id] = messageAuthor || null;
      }

      return {
        ...message,
        ...author
      };
    });
  }
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
