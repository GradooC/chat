import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import { MessageWithAuthor } from "../../store/dialog/types";
import CustomAvatar from "../UI/CustomAvatar";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: "20px 0",
      display: "flex",
      justifyContent: "flex-start",
    },
    item: {
      maxWidth: "70%"
    },
    meta: {
      display: 'flex'
    },
    avatar: {
      marginRight: 10,
      width: 60,
      height: 60,
      backgroundColor: '#ddd'
    },
    firstName: {
      textTransform: 'capitalize',
      marginRight: 3
    },
    lastName: {
      textTransform: 'capitalize',
      marginRight: 10
    },
    paper: {
      padding: "10px 25px",
      borderRadius: `0 100px 100px 100px`
    }
  });

interface TheirPhraseProps extends WithStyles<typeof styles> {
  item: MessageWithAuthor;
}

const TheirPhrase: FunctionComponent<TheirPhraseProps> = props => {
  const {
    classes,

    item: { text, time, firstName, lastName, avatar }
  } = props;

  return (
    <div className={classes.root}>
      <CustomAvatar firstName={firstName} lastName={lastName} avatar={avatar} />
      <div className={classes.item}>
        <div className={classes.meta}>
          <Typography classes={{ root: classes.firstName }}
            variant="caption"
          >{firstName}</Typography>
          <Typography classes={{ root: classes.lastName }}
            variant="caption"
          >{lastName}</Typography>
          <Typography
            variant="caption"
          >{time}</Typography>
        </div>
        <Paper elevation={5} classes={{ root: classes.paper }}>
          <Typography variant="body1">{text}</Typography>
        </Paper>
      </div>
    </div>
  );
};

export default withStyles(styles)(TheirPhrase);
