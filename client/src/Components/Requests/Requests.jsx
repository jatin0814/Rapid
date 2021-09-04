import React, { useState, useEffect } from "react";

import Request_Card from "../Request_Card/Request_Card";

import axios from "axios";
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


export default Requests;
