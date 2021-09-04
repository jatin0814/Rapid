import React, { useState, useEffect } from "react";

import User_Request_Card from "../User_Request_card/User_Request_card";

import axios from "axios";
import User_rqst from "../user_rqst/user_rqst";

function User_Request() {
<<<<<<< HEAD
  const [requests, setRequests] = useState([]);

  useEffect(async () => {
    try {
      const data = {
        id: JSON.parse(localStorage.getItem("policia"))?.userId,
      };

      const res = await axios.post("http://localhost:9000/user/getFir", data);

      console.log(res.data);
      setRequests(res.data.requests);
      console.log(requests);
    } catch (e) {
      console.log(e);
    }
  }, []);

  let requestsArray = (
    <div>
      {requests.map((rqst) => (
        <User_Request_Card
          id={rqst.reqId}
          facts={rqst.facts}
          date={rqst.date}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div>User Request</div>
      {requestsArray}
    </div>
  );
}

=======

    const [requests, setRequests] = useState([]);

    useEffect(async () => {
        try {

            const data = {
                id: localStorage.getItem("id")
              };
         
            const res = await axios.post(
                "http://localhost:9000/user/getFir",
                data
              );
        
              console.log(res.data);
              setRequests(res.data.requests);
              console.log(requests);

        } catch (e) {
          console.log(e);
        }
      }, []);

      let requestsArray = (
        <div>
          {requests.map((rqst) => (
           <User_Request_Card
           id = {rqst.reqId}
           facts = {rqst.facts}
           date = {rqst.date}/>
          ))}
        </div>
      );

  return (
    <div>

      <div>User Request</div>
      {requestsArray}

    </div>
    
  ) 
}


>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
export default User_Request;
