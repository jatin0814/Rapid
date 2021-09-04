import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, Redirect, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import {
  Brightness4Outlined as ToggleDarkModeIcon,
  Brightness5Outlined as ToggleLightModeIcon,
} from "@material-ui/icons/";

function Nav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const loc = useLocation();
  const location = loc.pathname !== "/";

  const isPolice = JSON.parse(localStorage.getItem("policia"))?.isPolice;
  let token = JSON.parse(localStorage.getItem("policia"))?.token;
  console.log(token, "from nav");
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [token]);
  return (
    <>
      {!location ? (
        <p className={styles.p}></p>
      ) : (
        <AppBar position="static" color="#555" className={classes.root}>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <div className={styles.logo}>Rapid</div>
            </Typography>

            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" className={classes.Button}>
                About
              </Button>
            </Link>

            {isPolice && login && (
              <Link
                to="/fir"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  FIR
                </Button>
              </Link>
            )}
            {isPolice && login && (
              <Link
                to="/old"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  Offline
                </Button>
              </Link>
            )}
            {isPolice && login && (
              <Link
                to="/list"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  History
                </Button>
              </Link>
            )}
            {isPolice && login && (
              <Link
                to="/requests"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  Requests
                </Button>
              </Link>
            )}
            {!isPolice && login && (
              <Link
                to="/request"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  New Request
                </Button>
              </Link>
            )}
            {!isPolice && login && (
              <Link
                to="/user/requests"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  letterSpacing: "1px",
                }}
              >
                <Button color="inherit" className={classes.Button}>
                  My request
                </Button>
              </Link>
            )}

            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                color="inherit"
                className={classes.Button}
                onClick={() => setLogin(false)}
              >
                {login ? "Logout" : "Login"}
              </Button>
            </Link>
            <IconButton
              color="inherit"
              onClick={() => {
                props.toggleDarkTheme();
              }}
              className={classes.toggleBtn}
            >
              {props.darkTheme ? (
                <ToggleLightModeIcon />
              ) : (
                <ToggleDarkModeIcon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    //  top: "0",
    flexGrow: 1,
    margin: "auto",
    padding: "5px",
    boxShadow: "0px 0.1px 10px #777",
    cursor: "pointer",
  },

  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    letterSpacing: 3,
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 0,
    //   // display: 'none'
    // },
  },
  Button: {
    marginLeft: "3px",
    textDecoration: "none",
    letterSpacing: "2px",
    fontWeight: "400",
    borderRadius: "0",
  },

  toggleBtn: {
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      marginRight: 5,
    },
  },
}));

export default Nav;
