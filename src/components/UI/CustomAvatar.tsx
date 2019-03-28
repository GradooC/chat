import React, { FunctionComponent } from "react";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: 10,
      width: 60,
      height: 60,
      backgroundColor: "#ddd"
    }
  });

interface TheirPhraseProps extends WithStyles<typeof styles> {}

const TheirPhrase: FunctionComponent<TheirPhraseProps> = props => {
  const { classes } = props;

  return true ? (
    <Avatar
      classes={{ root: classes.avatar }}
      alt="alt"
      src={require("../../assets/autcorporiseaque.png")}
    />
  ) : (
    <Avatar classes={{ root: classes.avatar }} alt="alt" >
      <PersonIcon />
    </Avatar>
  );
};

export default withStyles(styles)(TheirPhrase);