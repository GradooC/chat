import React, { FunctionComponent } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import { MessageInfo } from "../../store/dialog/types";
import getFormatedDate from "../../shared/dateFormatter";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    item: {
      maxWidth: "70%",
    },
    paper: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      borderRadius: `100px 0 100px 100px`
    }
  });

interface MyPhraseProps extends WithStyles<typeof styles> {
  item: MessageInfo;
}


const MyPhrase: FunctionComponent<MyPhraseProps> = props => {
  const {
    classes,
    item: { text, date }
  } = props;

  return (
    <div className={classes.root}>
          <div className={classes.item}>
            <Typography variant="caption" align="right">{getFormatedDate(date)}</Typography>
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
