import React, { useState, useEffect } from "react";

import firr from "../../ethereum/FIR";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";

import FIR_detail from "../FIR_detail/FIR_detail";
<<<<<<< HEAD
import { CircularProgress } from "@material-ui/core";

function FIR_list({ darkTheme }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
=======

function FIR_list({ darkTheme }) {
  const [addresses, setAddresses] = useState([]);
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d

  let addressesArray = [];

  useEffect(async () => {
<<<<<<< HEAD
    setLoading(true);
=======
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
    try {
      const count = await factory.methods.FIRCount().call();
      for (let i = 0; i < count; i++) {
        addressesArray.push(await factory.methods.deployedFIR(i).call());
      }
      setAddresses(addressesArray);
      console.log(addressesArray);
<<<<<<< HEAD
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
=======
    } catch (e) {
      console.log(e);
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
    }
  }, []);
  const addressesList = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {addresses.map((address) => (
        <FIR_detail darkTheme={darkTheme} address={address} />
      ))}
    </div>
  );
<<<<<<< HEAD
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
=======
  return (
>>>>>>> 19b92aea19a2d61442acab290c220b64672a968d
    <div>
      <h1 style={{ textAlign: "center" }}>ALL FIRs</h1>
      <div style={{ width: "80%", margin: "0 auto" }}>{addressesList}</div>
    </div>
  );
}

export default FIR_list;
