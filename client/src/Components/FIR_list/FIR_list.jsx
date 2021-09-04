import React, { useState, useEffect } from "react";

import firr from "../../ethereum/FIR";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";
import styles from "./FIR_list.module.css";
import FIR_detail from "../FIR_detail/FIR_detail";
import { CircularProgress } from "@material-ui/core";

function FIR_list({ darkTheme }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  let addressesArray = [];

  useEffect(async () => {
    setLoading(true);
    try {
      const count = await factory.methods.FIRCount().call();
      for (let i = 0; i < count; i++) {
        addressesArray.push(await factory.methods.deployedFIR(i).call());
      }
      setAddresses(addressesArray);
      console.log(addressesArray);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);
  const addressesList = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {addresses.map((address) => (
        <FIR_detail darkTheme={darkTheme} address={address} />
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
    <div className={styles.box}>
      <h1
        style={{ textAlign: "center", margin: "30px 0 10px", fontSize: "24px" }}
      >
        All FIRs / History
      </h1>
      <div style={{ width: "80%", margin: "0 auto" }}>{addressesList}</div>
    </div>
  );
}

export default FIR_list;
