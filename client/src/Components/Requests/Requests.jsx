import React, { useState, useEffect } from "react";

import Request_Card from "../Request_Card/Request_Card";

import axios from "axios";
<<<<<<< HEAD
import { CircularProgress } from "@material-ui/core";
import User_rqst from "../user_rqst/user_rqst";

function Requests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:9000/police/getRequest");
      console.log(res.data.data);
      setRequests(res.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);

  let requestsArray = (
    <div
      style={{
        width: "85%",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {requests.map((rqst) => (
        <Request_Card
          id={rqst.id}
          name={rqst.name}
          address={rqst.address}
          date={rqst.date}
          time={rqst.time}
          location={rqst.location}
          status={rqst.status}
          base64={rqst.imgBase64}
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
      <CircularProgress style={{ color: "black" }} />
    </div>
  ) : (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Requests</h1>
      {requestsArray}
    </div>
  );
}

=======
import User_rqst from "../user_rqst/user_rqst";

function Requests() {

    const [requests, setRequests] = useState([]);

    useEffect(async () => {
        try {
         
            const res = await axios.post(
                "http://localhost:9000/police/getRequest"
              );
        
              console.log(res.data.data);
              setRequests(res.data.data);

        } catch (e) {
          console.log(e);
        }
      }, []);

      let requestsArray = (
        <div>
          {requests.map((rqst) => (
           <Request_Card
           id = {rqst.id}
           name = {rqst.name}
           address = {rqst.address}
           date = {rqst.date}
           time = {rqst.time}
           location = {rqst.location}
           />
          ))}
        </div>
      );

  return (
    <div>

      <div>Requests</div>
      {requestsArray}

    </div>
    
  ) 
}


>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
export default Requests;
