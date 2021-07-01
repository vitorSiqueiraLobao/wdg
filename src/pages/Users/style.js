import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    "& p": {
      width: "100%",
    },
    "& button": {
      border: "none",
      marginTop: "40px",
      width: "10vw",
      height: "50px",
      borderRadius: "10px",
      background: theme.palette.color1,
      color: theme.palette.textColor1,
    },
    "& button:nth-child(2)": {
      marginLeft: "40px",
    },
  },
  buttons: {
    width: "80vw",
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh",
    width: "20vw",
    fontSize: "2rem",
    "& div": {
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      width: "100%",

      "& button:nth-child(1)": {
        color: theme.palette.textColor1,
        background: theme.palette.color3,
      },
      "& button": {
        border: "none",
        padding: "10px",
        borderRadius: "10px",
        color: theme.palette.textColor1,
        background: theme.palette.color4,
      },
    },
  },
  usersList: {
    justifySelf: "flex-start",
    marginTop: "10vh",
    height: "70vh",
    minHeight: "550px",
    minWidth: "450px",
    background: theme.palette.color2,
    color: theme.palette.textColor1,
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    width: "80%",
    borderRadius: "10px",
    "& div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    "& img": {
      borderRadius: "100%",
      width: "20vw",
      maxWidth: "100px",
    },
    "& div:nth-child(5)": {
      color: theme.palette.color4,
      fontWeigth: 400,
      cursor: "pointer",
    },
  },
}));

export default useStyles;
