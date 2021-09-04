import React from "react";
import fir from "../../ethereum/FIR";
import SimpleModal from "../Modal/Modal";
import web3 from "../../ethereum/web3";
import { Button, Typography } from "@material-ui/core";
import "./FIR_detail.css";
const FIR_detail = React.memo((props) => {
  const [values, setValues] = React.useState({
    id: "",
    name: "",
    adrs: "",
    createdOn: "",
    date: "",
    time: "",
    location: "",
    facts: "",
    status: "",
  });

  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    const fetch = async () => {
      const id = await fir(props.address)
        .methods.reporter_id()
        .call();
      const name = await fir(props.address)
        .methods.reporter_name()
        .call();
      const adrs = await fir(props.address)
        .methods.reporter_adrs()
        .call();
      const createdOn = await fir(props.address)
        .methods.createdOn()
        .call();
      const date = await fir(props.address)
        .methods.crime_date()
        .call();
      const time = await fir(props.address)
        .methods.crime_time()
        .call();
      const location = await fir(props.address)
        .methods.crime_location()
        .call();
      const facts = await fir(props.address)
        .methods.facts()
        .call();
      const status = await fir(props.address)
        .methods.status()
        .call();
      const temp = {
        id,
        name,
        adrs,
        createdOn,
        date,
        time,
        location,
        facts,
        status,
      };
      setValues(temp);
    };

    fetch();
  }, []);

  const handleClose = () => {
    setOpenModal(false);
  };

  const start = async () => {
    const accounts = await web3.eth.getAccounts();

    const status = await fir(props.address)
      .methods.status()
      .call();

    console.log(status);

    await fir(props.address)
      .methods.started()
      .send({
        from: accounts[0],
      });

    const statu = await fir(props.address)
      .methods.status()
      .call();

    const temp = {
      ...values,
    };
    temp.status = "1";
    setValues(temp);

    console.log(statu);
  };

  const end = async () => {
    const accounts = await web3.eth.getAccounts();

    const status = await fir(props.address)
      .methods.status()
      .call();

    console.log(status);

    await fir(props.address)
      .methods.finished()
      .send({
        from: accounts[0],
      });

    const statu = await fir(props.address)
      .methods.status()
      .call();

    const temp = {
      ...values,
    };
    temp.status = "2";
    setValues(temp);

    console.log(statu);
  };

  console.log(values);

  let statusD;
  let color;
  if (values.status === "0") {
    statusD = "Investigation to be started";
    color = "gray";
  } else if (values.status === "1") {
    statusD = "Investigating";
    color = "#808000";
  } else {
    statusD = "Done";
    color = "green";
  }

  return (
    <>
      <div
        onClick={() => setOpenModal(true)}
        style={{
          width: "100%",
          height: "150px",
          background: `${!props.darkTheme ? "#e0dfda" : "#000"}`,
          boxShadow: `0 3px 10px rgb(0 0 0 / 0.2)`,
          padding: "20px",
          margin: "20px 10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            height: "70%",
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
          }}
        >
          <div>FIR by {values.name}</div>
          <div>Fir address: {props.address}</div>
        </div>
        <div>
          <Typography
            style={{
              color: color,
              borderBottom: `3px solid ${color}`,
              textAlign: "end",
            }}
          >
            {statusD}
          </Typography>
          <div>Reported date:{values.createdOn}</div>
        </div>
      </div>
      {values.status === "2" ? null : (
        <Button
          style={{ color: "white", background: "#6e48aa", marginLeft: "10px" }}
          onClick={values.status === "0" ? start : end}
        >
          {values.status === "0" ? "start investigation" : "end investigation"}
        </Button>
      )}
      {openModal && (
        <SimpleModal
          darkTheme={props.darkTheme}
          value={values}
          handleClose={handleClose}
        />
      )}
    </>
  );
});

export default FIR_detail;
