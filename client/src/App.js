import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/NavBar/Nav";

import { darkTheme, lightTheme } from "./Components/Utils/Theme";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { light } from "@material-ui/core/styles/createPalette";
import { Paper } from "@material-ui/core";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Register from "./Components/Register/Register";
import FIR from "./Components/FIR/FIR";
import FIR_list from "./Components/FIR_list/FIR_list";
import User_rqst from "./Components/user_rqst/user_rqst";
import Requests from "./Components/Requests/Requests";
import User_Request from "./Components/User_Requests/User_Requests";
import Old from "./Components/Old_fir/Old_fir";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SimpleForm from "./Components/Bot/SimpleForm";
import Footer from "./Components/Footer/Footer";

function App(props) {
  const [darkThemeMode, setDarkThemeMode] = useState(false);

  const toggleDarkTheme = () => {
    console.log("trugger");
    setDarkThemeMode(!darkThemeMode);
  };

  const fontFamilyRoboto = {
    fontFamily: [
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  };

  const fontFamilyMetropolis = {
    fontFamily: [
      "Metropolis",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    letterSpacing: "0.015rem",
  };

  const muiDarkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#212121",
      },
    },

    typography: {
      ...fontFamilyMetropolis,
      fontSize: 15,
    },
  });

  const muiLightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#FFFFFF",
      },
    },

    typography: {
      ...fontFamilyRoboto,
      fontSize: 15,
    },
  });

  // const location = useLocation();

  return (
    <>
      <ThemeProvider
        theme={darkThemeMode ? muiDarkTheme : muiLightTheme}
        className="App"
      >
        <Paper
          style={{
            minHeight: "100vh",
            borderRadius: "0",
            backgroundColor: darkThemeMode ? "#333333" : "#FFFAFA",
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <SimpleForm />
          <Router>
            <div className="App">
              <Nav
                {...props}
                darkTheme={darkThemeMode}
                toggleDarkTheme={toggleDarkTheme}
              />

              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login {...props} darkTheme={darkThemeMode} />
                )}
              />
              <Route exact path="/about" component={About} />

              <Route
                exact
                path="/register"
                render={(props) => (
                  <Register {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Route
                exact
                path="/fir"
                render={(props) => <FIR {...props} darkTheme={darkThemeMode} />}
              />

              <Route
                exact
                path="/list"
                render={(props) => (
                  <FIR_list {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Route
                exact
                path="/request"
                render={(props) => (
                  <User_rqst {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Route
                exact
                path="/requests"
                render={(props) => (
                  <Requests {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Route
                exact
                path="/user/requests"
                render={(props) => (
                  <User_Request {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Route
                exact
                path="/old"
                render={(props) => (
                  <Old {...props} darkTheme={darkThemeMode} />
                )}
              />

              <Footer />
            </div>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
