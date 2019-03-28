import React, { FunctionComponent } from "react";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
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
// import img from "../../assets/autcorporiseaque.png";

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
    userName: {
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
    item: { text, time, userName }
  } = props;

  return (
    <div className={classes.root}>
      {/* <Avatar classes={{ root: classes.avatar }} alt={userName} src={img}>
        <PersonIcon />
      </Avatar> */}
      <CustomAvatar />
      <div className={classes.item}>
        <div className={classes.meta}>
          <Typography classes={{ root: classes.userName }}
            variant="caption"
          >{userName}</Typography>
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
