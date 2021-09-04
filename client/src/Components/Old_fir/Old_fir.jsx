import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Old_card from "../Old_fir_card/Old_fir_card";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";

function Old() {
  const [file, setFile] = useState({});
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.post("https://rapid-backend.herokuapp.com/getOldFir");
      setData(res.data.data);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onSubmitHandler = async (event) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", desc);

      const res = await axios.post("https://rapid-backend.herokuapp.com/addOldFir", formData);

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  let requestsArray = (
    <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
      {data.map((d) => (
        <Old_card desc={d.description} base64={d.imgbase64} />
      ))}
    </div>
  );

  return (
    <div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", margin: "10px 20px" }}>
          Upload Old FIRs
        </h1>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <TextField
            id="outlined-basic-2"
            label={`Description`}
            variant="outlined"
            type="text"
            style={{ borderColor: "black" }}
            onChange={(e) => setDesc(e.target.value)}
          />

          <TextField
            id="outlined-basic-2"
            variant="outlined"
            type="file"
            style={{ borderColor: "black", marginBottom: "15px" }}
            onChange={(e) => setDesc(e.target.value[0])}
          />
          <Button
            style={{ background: "blue", color: "white", width: "100px" }}
            onClick={onSubmitHandler}
          >
            Upload
          </Button>
        </div>
        <h2 style={{ textAlign: "center" }}>Old FIRs</h2>
        <div>{requestsArray}</div>
      </div>
    </div>
  );
}

export default Old;
