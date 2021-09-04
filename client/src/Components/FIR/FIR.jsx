import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import "./FIR.css";
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d

import firr from "../../ethereum/FIR";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";
<<<<<<< HEAD
import { TextField, Button, CircularProgress } from "@material-ui/core";
import "./FIR.css";
import { toast } from "react-toastify";
=======
import { TextField, Button } from "@material-ui/core";
import "./FIR.css";
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d

function FIR({ darkTheme }) {
  const [values, setValues] = useState({
    reporter_id: "",
    reporter_name: "",
    reporter_address: "",
    crime_date: "",
    crime_time: "",
    crime_location: "",
    facts: "",
  });

<<<<<<< HEAD
  const [loading, setLoading] = React.useState(false);

  const onSubmitHandler = async (event) => {
    setLoading(true);
=======
  const onSubmitHandler = async (event) => {
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
    const accounts = await web3.eth.getAccounts();
    const {
      reporter_id,
      reporter_name,
      reporter_address,
      crime_date,
      crime_time,
      crime_location,
      facts,
    } = values;
    const fir = await factory.methods
      .createFIR(
        reporter_id,
        reporter_name,
        reporter_address,
        crime_date,
        crime_time,
        crime_location,
        facts
      )
      .send({
        from: accounts[0],
      });
    const count = await factory.methods.FIRCount().call();
    console.log(count);
    console.log(values);
<<<<<<< HEAD
    setLoading(false);
    toast.success("Fir submitted");
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
<<<<<<< HEAD
    <div style={{ padding: "20px 0", overflowX: "hidden" }}>
=======
    <div style={{ padding: "20px 0" }}>
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
      <div
        style={{
          width: "80%",
          margin: "0 auto",
<<<<<<< HEAD
          boxShadow: `0 3px 10px ${darkTheme ? "111" : "rgb(0 0 0 / 0.2)"}`,
=======
          boxShadow: `0 3px 10px ${darkTheme ? "#3A3A3B" : "rgb(0 0 0 / 0.2)"}`,
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
        }}
      >
        <h1 style={{ textAlign: "center", padding: "15px 0" }}>File F.I.R</h1>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexFlow: "column",
            margin: "0 auto",
            //   overflowY: "scroll",
<<<<<<< HEAD

=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
            padding: "20px 0",
          }}
        >
          <label className="Fir__label">Reporter Details</label>
<<<<<<< HEAD
          <br />
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
          <TextField
            id="outlined-basic-2"
            label={`Reporter ID`}
            variant="outlined"
            value={values.reporter_id}
            onChange={handleChange("reporter_id")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />

          <TextField
            id="outlined-basic-2"
            label={`Reporter Name`}
            variant="outlined"
            value={values.reporter_name}
            onChange={handleChange("reporter_name")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
          <TextField
            id="outlined-basic-2"
            label={`Reporter address`}
            variant="outlined"
            value={values.reporter_address}
            onChange={handleChange("reporter_address")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
          <label className="Fir__label">Crime Details</label>
<<<<<<< HEAD
          <br />
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
          <TextField
            id="outlined-basic-2"
            label={`Crime date`}
            variant="outlined"
            value={values.crime_date}
            onChange={handleChange("crime_date")}
            style={{ borderColor: "black", marginBottom: "10px" }}
<<<<<<< HEAD
            className="text"
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
          />
          <TextField
            id="outlined-basic-2"
            label={`Crime Time`}
            variant="outlined"
            value={values.crime_time}
            onChange={handleChange("crime_time")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
          <TextField
            id="outlined-basic-2"
            label={`Crime location`}
            variant="outlined"
            value={values.crime_location}
            onChange={handleChange("crime_location")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
          <label className="Fir__label">Facts</label>
<<<<<<< HEAD
          <br />
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
          <TextField
            id="outlined-basic-2"
            label={`Facts`}
            variant="outlined"
            value={values.facts}
            onChange={handleChange("facts")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
<<<<<<< HEAD
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                background: "#6e48aa",
                width: "100%",
                marginTop: "15px",
                color: "white",
                minWidth: "200px",
              }}
              onClick={onSubmitHandler}
            >
              {loading ? (
                <CircularProgress style={{ width: "20px", height: "20px" }} />
              ) : (
                "Submit"
              )}
            </Button>
            <Button
              style={{
                background: "#6e48aa",
                width: "100%",
                marginTop: "25px",
                color: "white",
                minWidth: "200px",
=======
          <div style={{ display: "flex" }}>
            <Button
              style={{
                background: "blue",
                width: "10%",
                marginRight: "15px",
                color: "white",
              }}
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
            <Button
              style={{
                background: "blue",
                width: "10%",
                marginRight: "15px",
                color: "white",
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
              }}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FIR;
