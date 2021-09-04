import React from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import { toast } from "react-toastify";

function Login(props) {
  const { darkTheme } = props;

  const [values, setValues] = React.useState({
    userName: "",
    password: "",
    showPassword: false,
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

  React.useEffect(() => {
    localStorage.removeItem("policia");
  }, []);

  const handleSubmit = async () => {
    try {
      let temp;
      if (ToggleUser === "Police") {
        const obj = {
          id: values.userName,
          password: values.password,
          isPolice: true,
        };
        temp = obj;
      } else {
        const obj = {
          email: values.userName,
          password: values.password,
          isPolice: false,
        };
        temp = obj;
      }
      const resp = await axios.post(
        "https://rapid-backend.herokuapp.com/user/auth",
        temp
      );
      console.log(resp.data);
      localStorage.setItem("policia", JSON.stringify(resp.data));
      toast.success("Succesfully Logged in");
      if (ToggleUser === "Police") {
        props.history.push("/fir");
      } else {
        props.history.push("/request");
      }
    } catch (e) {
      console.log(e);
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
                borderBottom:
                  ToggleUser === "Police" &&
                  `2px solid ${darkTheme ? "white" : "black"}`,
              }}
              onClick={() => {
                setToggleUser("Police");
                setValues({ userName: "", password: "", showPassword: false });
              }}
            >
              Police
            </p>
            <p
              className="AuthHead_p"
              style={{
                borderBottom:
                  ToggleUser === "User" &&
                  `2px solid ${darkTheme ? "white" : "black"}`,
              }}
              onClick={() => {
                setToggleUser("User");
                setValues({ userName: "", password: "", showPassword: false });
              }}
            >
              User
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
            <label className="AuthLabel">
              {ToggleUser === "Police" ? `Police station Code` : "User Name"}
            </label>
            <TextField
              id="outlined-basic-2"
              label={
                ToggleUser === "Police"
                  ? `I.D.- 1234 , Password- 1234`
                  : "I.D.- test@test.com , Password- password"
              }
              variant="outlined"
              value={values.userName}
              onChange={handleChange("userName")}
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
          <div
            style={{
              width: "80%",
              margin: "0 auto",
              padding: "30px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {ToggleUser !== "Police" && (
              <Button onClick={() => props.history.push("/register")}>
                Sign Up
              </Button>
            )}
            <Button
              style={{ marginRight: "15px", fontWeight: "600" }}
              onClick={handleSubmit}
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
