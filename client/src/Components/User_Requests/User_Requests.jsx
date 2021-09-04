import React, { useState, useEffect } from "react";

import User_Request_Card from "../User_Request_card/User_Request_card";

import axios from "axios";
import User_rqst from "../user_rqst/user_rqst";
import { CircularProgress } from "@material-ui/core";

function User_Request({ darkTheme }) {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const data = {
        id: JSON.parse(localStorage.getItem("policia"))?.userId,
      };

      console.log(JSON.parse(localStorage.getItem("policia"))?.userId);

      const res = await axios.post("https://rapid-backend.herokuapp.com/user/getFir", data);

      console.log(res.data.requests);
      setRequests(res.data.requests);
      console.log(requests);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);

  let requestsArray = (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {requests.map((rqst) => (
        <User_Request_Card
          darkTheme={darkTheme}
          id={rqst.reqId}
          facts={rqst.facts}
          date={rqst.date}
        />
      ))}
    </div>
  );

  return loading ? (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ color: darkTheme ? "#FFF" : "#000" }} />
    </div>
  ) : (
    <dive>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        User Request
      </h1>
      {requestsArray}
    </dive>
  );
}

export default User_Request;
