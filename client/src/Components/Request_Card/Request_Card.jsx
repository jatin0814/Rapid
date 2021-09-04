import React, { useState, useEffect } from "react";

import axios from 'axios';

import { PinDropSharp } from "@material-ui/icons";

function Request_Card(props) {

    const onApproveHandler = async (event) => {
        try {

            const data = {
                id: props.id,
                action: true
              };

            const res = await axios.post(
                "http://localhost:9000/police/actionOnRequest",
                data
              );
        
              console.log(res);

        } catch (e) {
          console.log(e);
        }
    }

    const onRejectHandler = async (event) => {
        try {

            const data = {
                id: props.id,
                action: false
              };

            const res = await axios.post(
                "http://localhost:9000/police/actionOnRequest",
                data
              );
        
              console.log(res);

        } catch (e) {
          console.log(e);
        }
    }

  return (
    <div>

      <div>{props.id}</div>
      <div>{props.name}</div>
      <div>{props.address}</div>
      <div>{props.date}</div>
      <div>{props.time}</div>
      <div>{props.location}</div>
      <div>{props.facts}</div>

      <button onClick={onApproveHandler}>Approve</button>
      <button onClick={onRejectHandler}>Reject</button>

    </div>
    
  ) 
}


export default Request_Card;



