import React, { FunctionComponent } from "react";
import Avatar from "@material-ui/core/Avatar";
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
      backgroundColor: "#bdbdbd",
      color: 'blue'
    }
  });

interface CustomAvatarProps extends WithStyles<typeof styles> {
  avatar: string | null;
  firstName: string;
  lastName: string;
}

const CustomAvatar: FunctionComponent<CustomAvatarProps> = props => {
  const { classes, avatar, firstName, lastName } = props;

  return avatar ? (
    <Avatar
      classes={{ root: classes.avatar }}
      alt={lastName}
      src={require(`../../assets/${avatar}`)}
    />
  ) : (
    <Avatar classes={{ root: classes.avatar }} alt={lastName} >
      {`${firstName.substr(0, 1).toLocaleUpperCase()}${lastName.substr(0, 1).toLocaleUpperCase()}`}
    </Avatar>
  );
};

export default withStyles(styles)(CustomAvatar);