import React, { useState, useEffect } from "react";

import axios from 'axios';

import { PinDropSharp } from "@material-ui/icons";

function User_Request_Card(props) {

  return (
    <div>

      <div>{props.id}</div>
      <div>{props.date}</div>
      <div>{props.facts}</div>

    </div>
    
  ) 
}


export default User_Request_Card;



