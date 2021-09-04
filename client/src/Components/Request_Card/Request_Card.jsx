import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Card.css";
import { Button, CircularProgress } from "@material-ui/core";
import { darkTheme } from "../Utils/Theme";

function Request_Card(props) {
  const [values, setValues] = React.useState({
    id: props.id,
    name: props.name,
    address: props.address,
    date: props.date,
    time: props.time,
    location: props.location,
    facts: props.facts,
    status: props.status,
  });

  const [loading, setLoading] = useState(false);

  const onApproveHandler = async (event) => {
    setLoading(true);
    try {
      const data = {
        id: props.id,
        action: true,
      };
      const res = await axios.post(
        "https://rapid-backend.herokuapp.com/police/actionOnRequest",
        data
      );
      const temp = { ...values };
      temp.status = true;
      setValues(temp);
      console.log(res);
      toast.success("Appproved");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const onRejectHandler = async (event) => {
    setLoading(true);
    try {
      const data = {
        id: props.id,
        action: false,
      };
      const res = await axios.post(
        "https://rapid-backend.herokuapp.com/police/actionOnRequest",
        data
      );
      const temp = { ...values };
      temp.status = false;
      setValues(temp);
      console.log(res);
      toast.error("Rejected");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "auto",
        width: "400px",

        background:
          values.status === undefined
            ? props.darkTheme
              ? "#000"
              : "#e0dfda"
            : values.status
            ? "#4dff88"
            : "#ff4d4d",

        boxShadow: `0 3px 10px rgb(0 0 0 / 0.2)`,
        padding: "20px",
        margin: "15px",
        borderRadius: "10px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-around",
      }}
    >
      <div>
        {props.base64 && (
          <img
            id="base64image"
            src={`data:image/jpeg;base64,${props.base64}`}
            style={{ height: "100px", borderRadius: "10px", margin: "10px" }}
          />
        )}

        <div>ID: {values.id}</div>
        <div>Name: {values.name}</div>
        <div>Address: {values.address}</div>
        <div>Date: {values.date}</div>
        <div>Time: {values.time}</div>
        <div>Location: {values.location}</div>
        <div>Facts: {values.facts}</div>
        {values.status && <p>Status: {values.status && "Done"}</p>}
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {values.status ? (
          <p></p>
        ) : (
          <div
            style={{
              flex: "100%",
            }}
          >
            <Button
              style={{
                width: "80%",
                margin: "10px 10%",
                marginTop: "10px",
                color: "white",
                background: "#6e48aa",
              }}
              onClick={onApproveHandler}
            >
              Approve
            </Button>
            <Button
              style={{
                width: "80%",
                margin: "10px 10%",
                color: "white",
                background: "#6e48aa",
              }}
              onClick={onRejectHandler}
            >
              Reject
            </Button>
          </div>
        )}

        <div>
          {loading && (
            <CircularProgress
              style={{ color: "black", height: "20px", width: "20px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Request_Card;
