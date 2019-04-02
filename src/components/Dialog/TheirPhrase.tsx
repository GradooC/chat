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
import getFormatedDate from '../../shared/dateFormatter';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
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
      marginRight: theme.spacing.unit,
      width: theme.spacing.unit * 8,
      height: theme.spacing.unit * 8,
      backgroundColor: '#ddd'
    },
    firstName: {
      textTransform: 'capitalize',
      marginRight: theme.spacing.unit / 2,
    },
    lastName: {
      textTransform: 'capitalize',
      marginRight: theme.spacing.unit
    },
    paper: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      borderRadius: `0 100px 100px 100px`
    }
  });

interface TheirPhraseProps extends WithStyles<typeof styles> {
  item: MessageWithAuthor;
}

const TheirPhrase: FunctionComponent<TheirPhraseProps> = props => {
  const {
    classes,

    item: { text, date, first_name, last_name, avatar }
  } = props;

  return (
    <div className={classes.root}>
      <CustomAvatar firstName={first_name} lastName={last_name} avatar={avatar} />
      <div className={classes.item}>
        <div className={classes.meta}>
          <Typography classes={{ root: classes.firstName }}
            variant="caption"
          >{first_name}</Typography>
          <Typography classes={{ root: classes.lastName }}
            variant="caption"
          >{last_name}</Typography>
          <Typography
            variant="caption"
          >{getFormatedDate(date)}</Typography>
        </div>
        <Paper elevation={5} classes={{ root: classes.paper }}>
          <Typography variant="body1">{text}</Typography>
        </Paper>
      </div>
    </div>
  );
};

export default withStyles(styles)(TheirPhrase);
