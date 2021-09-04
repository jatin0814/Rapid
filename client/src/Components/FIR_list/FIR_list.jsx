import React, { useState, useEffect } from "react";

import firr from "../../ethereum/FIR";
import factory from "../../ethereum/Factory";
import web3 from "../../ethereum/web3";

import FIR_detail from "../FIR_detail/FIR_detail";

function FIR_list({ darkTheme }) {
  const [addresses, setAddresses] = useState([]);

  let addressesArray = [];

  useEffect(async () => {
    try {
      const count = await factory.methods.FIRCount().call();
      for (let i = 0; i < count; i++) {
        addressesArray.push(await factory.methods.deployedFIR(i).call());
      }
      setAddresses(addressesArray);
      console.log(addressesArray);
    } catch (e) {
      console.log(e);
    }
  }, []);
  const addressesList = (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {addresses.map((address) => (
        <FIR_detail darkTheme={darkTheme} address={address} />
      ))}
    </div>
  );
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ALL FIRs</h1>
      <div style={{ width: "80%", margin: "0 auto" }}>{addressesList}</div>
    </div>
  );
}

export default FIR_list;
