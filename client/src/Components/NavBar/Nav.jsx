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

  return (
    <>
      {!location ? (
        <p className={styles.p}></p>
      ) : (
        <AppBar position="static" color="transparent" className={classes.root}>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </Typography>

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
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" className={classes.Button}>
                About
              </Button>
            </Link>

            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button color="inherit" className={classes.Button}>
                Login
              </Button>
            </Link>
            {isPolice && (
              <Link
                to="/fir"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  FIR
                </Button>
              </Link>
            )}
            {isPolice && (
              <Link
                to="/list"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  All FIR
                </Button>
              </Link>
            )}
            {isPolice && (
              <Link
                to="/requests"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  All Requests
                </Button>
              </Link>
            )}
            {!isPolice && (
              <Link
                to="/request"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  New Request
                </Button>
              </Link>
            )}
            {!isPolice && (
              <Link
                to="/user/requests"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button color="inherit" className={classes.Button}>
                  My request
                </Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1100,
    margin: "auto",
    boxShadow: "none",
    cursor: "pointer",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    letterSpacing: 2,
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: 0,
    //   // display: 'none'
    // },
  },
  Button: {
    // marginLeft: "10px",
    textDecoration: "none",
  },
  toggleBtn: {
    marginRight: 20,
    [theme.breakpoints.down("xs")]: {
      marginRight: 5,
    },
  },
}));

export default Nav;
