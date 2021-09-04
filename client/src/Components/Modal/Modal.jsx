import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function SimpleModal({ handleClose, value, darkTheme }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${darkTheme ? "#FFF" : "#000"}`,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  let status;
  if (value.status === "0") {
    status = <p>Haven't Started</p>;
  } else if (value.status === "1") {
    status = <p>Investigating...</p>;
  } else {
    status = <p>Investigation Done..</p>;
  }
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="h5"
        id="simple-modal-title"
        style={{ color: darkTheme ? "#FFF" : "#000" }}
      >
        Fir Details
      </Typography>
      <p
        style={{ color: darkTheme ? "#FFF" : "#000" }}
        id="simple-modal-description"
      >
        Fir reported by: {value.name}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Reporter Address: {value.adrs}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Reporting Date: {value.createdOn}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Crime time: {value.time}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Crime date: {value.date}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Crime Location: {value.location}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}>
        Crime facts: {value.facts}
      </p>
      <p style={{ color: darkTheme ? "#FFF" : "#000" }}> Status: {status}</p>
    </div>
  );

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

// id: "",
// name: "",
// adrs: "",
// createdOn: "",
// date: "",
// time: "",
// location: "",
// facts: "",
// status: "",
