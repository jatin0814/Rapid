import { PinDropSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

function Old_card(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      {props.desc}
      <img
        height="200px"
        id="base64image"
        src={`data:image/jpeg;base64,${props.base64}`}
      />
    </div>
  );
}

export default Old_card;
