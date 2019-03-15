import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center"
    },
    button: {
      width: 210,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3
    }
  });

export default styles;
