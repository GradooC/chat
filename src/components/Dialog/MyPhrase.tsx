import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
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
import { MessageInfo } from "../../store/dialog/types";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: "20px 0",
      display: 'flex',
      justifyContent: 'flex-end'
    },
    item: {
      maxWidth: "70%",
    },
    paper: {
      padding: "10px 25px",
      borderRadius: `100px 0 100px 100px`
    }
  });

interface MyPhraseProps extends WithStyles<typeof styles> {
  item: MessageInfo;
}

const MyPhrase: FunctionComponent<MyPhraseProps> = props => {
  const {
    classes,
    item: { text, time }
  } = props;

  return (
    <div className={classes.root}>
          <div className={classes.item}>
            <Typography variant="caption" align="right">{time}</Typography>
            <Paper
              elevation={5}
              classes={{ root: classes.paper }}
            >
              <Typography variant="body1">{text}</Typography>
            </Paper>
          </div>
    </div>
  );
};

export default withStyles(styles)(MyPhrase);
