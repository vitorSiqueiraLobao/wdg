import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& div": {
      width: "50%",
      background: theme.palette.color1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "50px",
      borderRadius: "30px",
    },
    "& input": {
      border: "none",
      marginTop: "10px",
      padding: "5px",
      borderRadius: "5px",
    },
    "& button": {
      border: "none",
      marginTop: "10px",
      padding: "5px",
      borderRadius: "5px",
      background: theme.palette.textColor1,
    },
    "& img": {
      width: "200px",
      borderRadius: "100%",
    },
  },
}));

export default useStyles;
