import React, { useState, useEffect } from "react";

import axios from "axios";

import { PinDropSharp } from "@material-ui/icons";

function User_Request_Card(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        background: props.darkTheme ? "#000" : "#e0dfda",
        marginBottom: "25px",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: `0 3px 10px rgb(0 0 0 / 0.2)`,
      }}
    >
      <div>
        <div style={{ fontWeight: "bold" }}>Request ID: {props.id}</div>
        <div>Description: {props.facts}</div>
      </div>
      <div>{props.date}</div>
    </div>
  );
}

export default User_Request_Card;
