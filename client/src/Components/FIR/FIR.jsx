import React, { useState, useEffect } from "react";
import "./FIR.css";

import firr from "../../ethereum/FIR";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import "./FIR.css";
import { toast } from "react-toastify";

function FIR({ darkTheme, history }) {
  const [values, setValues] = useState({
    reporter_id: "",
    reporter_name: "",
    reporter_address: "",
    crime_date: "",
    crime_time: "",
    crime_location: "",
    facts: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSubmitHandler = async (event) => {
    setLoading(true);
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
    setLoading(false);
    toast.success("Fir submitted");
    history.push("/list");
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div style={{ padding: "20px 0", overflowX: "hidden" }}>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          boxShadow: `0 3px 10px ${darkTheme ? "#555" : "rgb(0 0 0 / 0.2)"}`,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            padding: "15px 0",
            fontSize: "28px",
            letterSpacing: "1px",
          }}
        >
          F.I.R. Application
        </h1>
        <div
          style={{
            width: "60%",
            display: "flex",
            flexFlow: "column",
            margin: "0 auto",
            //   overflowY: "scroll",

            padding: "20px 0",
          }}
        >
          <label className="Fir__label">Reporter Details</label>
          <br />
          <TextField
            id="outlined-basic-2"
            label={`Reporter ID`}
            variant="outlined"
            value={values.reporter_id}
            onChange={handleChange("reporter_id")}
            style={{ borderColor: "black", marginBottom: "10px" }}
            className="textfeild"
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
          <br />
          <TextField
            id="outlined-basic"
            label={`Crime date (dd/mm/yyyy)`}
            variant="outlined"
            value={values.crime_date}
            onChange={handleChange("crime_date")}
            style={{ borderColor: "black|blue", marginBottom: "10px" }}
            className="text"
          />
          <TextField
            id="outlined-basic-2"
            label={`Crime Time (hh:mm)`}
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
          <br />
          <TextField
            id="outlined-basic"
            label={`Facts`}
            variant="outlined"
            value={values.facts}
            onChange={handleChange("facts")}
            style={{ borderColor: "black", marginBottom: "10px" }}
          />
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
                marginTop: "20px",
                marginBottom: "15px",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default FIR;
