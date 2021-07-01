import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      margin: "0px",
      color: theme.palette.color1,
      fontSize: "15rem",
      fontWeight: 100,
    },
    "& p": {
      margin: "0px",
      color: "black",
      fontSize: "2rem",
      fontWeight: 100,
    },
    "& button": {
      cursor: "pointer",
      marginTop: "40px",
      border: "none",
      background: theme.palette.color1,
      fontSize: "2rem",
      color: theme.palette.textColor1,
      padding: "10px 30px 10px 30px",
      borderRadius: "10px",
      transition: ".5s",
      "&:hover": {
        background: theme.palette.color2,
      },
    },
  },
}));

export default useStyles;
