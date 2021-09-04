import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";

function User_rqst(props) {
  const [values, setValues] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
    location: "",
    facts: "",
  });

  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmitHandler = async (event) => {
    setLoading(true);
    const { name, address, date, time, location, facts } = values;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", JSON.parse(localStorage.getItem("policia")).userId);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("location", location);
      formData.append("facts", facts);

      let config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      if (
        name === "" ||
        address === "" ||
        date === "" ||
        time === "" ||
        location === "" ||
        facts === ""
      ) {
        toast.error("Field is empty!");
        return;
      }

      const res = await axios.post(
        "https://rapid-backend.herokuapp.com/police/addRequest",
        formData,
        config
      );

      console.log(res);
      toast.success("Successfully submitted");
      setLoading(false);
      props.history.push("/user/requests");
    } catch (e) {
      console.log(e);
      toast.error("Request failed");
      setLoading(false);
    }
    // console.log(values);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", fontWeight: "700" }}
      >
        File your FIR request here
      </Typography>

      <form
        style={{
          display: "flex",
          flexFlow: "column",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <label
          className="Fir__label"
          style={{ fontSize: "24px", fontWeight: "600" }}
        >
          Fir Details
        </label>
        <br />
        <label>Name:</label>
        <TextField
          id="outlined-basic-2"
          label={`Eg. Aditya Singh`}
          variant="outlined"
          value={values.name}
          onChange={handleChange("name")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />
        <label>Address:</label>
        <TextField
          id="outlined-basic-2"
          label={`Eg. 36/1 Site No '2'`}
          variant="outlined"
          value={values.address}
          onChange={handleChange("address")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />
        <label
          className="Fir__label"
          style={{ fontSize: "24px", fontWeight: "600" }}
        >
          Reporter Details
        </label>
        <br />
        <label>Date:</label>
        <TextField
          id="outlined-basic-2"
          label={`Eg. 03/02/2020`}
          variant="outlined"
          value={values.date}
          onChange={handleChange("date")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />
        <label>Time:</label>
        <TextField
          id="outlined-basic-2"
          label={`Eg. 02:00`}
          variant="outlined"
          value={values.time}
          onChange={handleChange("time")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />
        <label>Location:</label>
        <TextField
          id="outlined-basic-2"
          label={`eg Kiadwai Nagar,Kanpur`}
          variant="outlined"
          value={values.location}
          onChange={handleChange("location")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />
        <label>Details:</label>
        <TextField
          id="outlined-basic-2"
          label={`Facts/ Details about F.I.R.`}
          variant="outlined"
          value={values.facts}
          onChange={handleChange("facts")}
          style={{ borderColor: "black", marginBottom: "10px" }}
          required
        />

        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
          style={{ width: "100%", margin: "20px 0", border: "1px solid #ccc" }}
        />

        <Button
          style={{
            width: "100%",
            background: "#6e48aa",
            color: "white",
            padding: "7px",
          }}
          onClick={onSubmitHandler}
        >
          {loading ? (
            <CircularProgress style={{ width: "20px", height: "20px" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}

export default User_rqst;
