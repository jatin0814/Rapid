import React from "react";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
function Login(props) {
  const { darkTheme } = props;

  const [values, setValues] = React.useState({
    userName: "",
    password: "",
    showPassword: false,
    phoneNo: "",
    email: "",
  });

  const [ToggleUser, setToggleUser] = React.useState("Police");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    console.log(values);

    try {
      const temp = { ...values };
      delete temp.showPassword;
      const resp = await axios.post(
        "http://localhost:9000/user/register",
        temp
      );
      console.log(resp);
      toast.success("Succesfully Registered, Go to Login!");
    } catch (e) {
      toast.error("Some error occured");
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div
          style={{
            width: "40%",
            // height: "70%",
            boxSizing: "border-box",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: `0 3px 10px ${
              darkTheme ? "#3A3A3B" : "rgb(0 0 0 / 0.2)"
            }`,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 0px",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <p
              className="AuthHead_p"
              style={{
                borderBottom: `2px solid ${darkTheme ? "white" : "black"}`,
              }}
            >
              Register
            </p>
          </div>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexFlow: "column",
              margin: "0 auto",
            }}
          >
            <label className="AuthLabel">Name</label>
            <TextField
              id="outlined-basic-2"
              label={`Name`}
              variant="outlined"
              value={values.userName}
              onChange={handleChange("userName")}
              style={{ borderColor: "black" }}
            />
            <label className="AuthLabel">Phone number</label>
            <TextField
              id="outlined-basic-2"
              label={`Phone number`}
              variant="outlined"
              value={values.phoneNo}
              onChange={handleChange("phoneNo")}
              style={{ borderColor: "black" }}
            />
            <label className="AuthLabel">Email</label>
            <TextField
              id="outlined-basic-2"
              label={`Email`}
              variant="outlined"
              value={values.email}
              onChange={handleChange("email")}
              style={{ borderColor: "black" }}
            />
            <label className="AuthLabel">Password</label>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </div>
          <div style={{ width: "80%", margin: "0 auto", padding: "30px 0" }}>
            <Button style={{ marginRight: "15px" }} onClick={handleSubmit}>
              Register
            </Button>
            <Button
              style={{ marginRight: "15px" }}
              onClick={() => {
                props.history.push("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
