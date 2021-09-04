import React, { useState } from "react";
import styles from "./About.module.css";
import Footer from "../Footer/Footer";
function About() {
  const [a1, seta1] = useState(false);
  const clicked1 = () => {
    seta1(!a1);
  };
  const [a2, seta2] = useState(false);
  const clicked2 = () => {
    seta2(!a2);
  };
  const [a3, seta3] = useState(false);
  const clicked3 = () => {
    seta3(!a3);
  };
  const [a4, seta4] = useState(false);
  const clicked4 = () => {
    seta4(!a4);
  };
  return (
    <div className={styles.about}>
      <div className={styles.mission}>
        <h1>The Problem</h1>
        <p>
          The first information report is a written report prepared by the
          police department of the respective police station where the crime
          (Cognizable offense) has occurred. This is an essential practice which
          gives a kickstart to a criminal proceeding in a court.
          <br />
          <br />
          Many such F.I.R.'s (First Information Report) are tampered, deleted or
          refaced.
          <br />
          <br />
          These occurances tend to bring out injustice in the society and as a
          results innocents are held guilty whereas criminals are set free.
          <br />
          <br />
          Links of few such occurances have been provided below.
        </p>
        <ul>
          <li>
            <a href="https://www.business-standard.com/article/pti-stories/sub-inspector-arrested-for-tampering-with-fir-in-rape-case-115012700040_1.html">
              Tampering F.I.R.
            </a>
          </li>
          <li>
            <a href="https://theprint.in/india/sho-outpost-incharge-booked-for-not-filing-fir-in-budaun-gang-rape-murder-case/582700/">
              F.I.R not Registered
            </a>
          </li>
          <li>
            <a href="https://indiankanoon.org/doc/141814818/">
              Offline F.I.R problems
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mission2}>
        <h1>The Solution</h1>
        <p>
          We proposed a block chain based Application that can assure-
          <br></br>
          1. General Public can submit online F.I.R. which will remain secure on
          system.
          <br />
          2. Police officials can lodge a new F.I.R. based on public request or
          their own investigation.
          <br />
          3. A F.I.R. once lodged then cannot be tampered, deleted or refaced.
          <br />
          4. User can get active status of their lodged applications and be
          stress free.
          <br />
          5. If the F.I.R is not attended then user will get a status and they
          can contact higher officials or the State Human Rights Commission or
          the National Human Rights Commission.
          <br />
          6. User can be helped by the Chat Bot is also provided which provides
          many useful details.
          <br />
          <br />
        </p>
      </div>
      <div className={styles.mission3}>
        <h1>FAQ's</h1>
        <div className={styles.tab}>
          <div className={styles.ques}>
            <h2>What is RapiD ?</h2>
          </div>

          {a1 ? (
            <div className={styles.arrow} onClick={clicked1}>
              &#8963;
            </div>
          ) : (
            <div className={styles.arrowf} onClick={clicked1}>
              &#8964;
            </div>
          )}
          <div className={a1 ? styles.ans : styles.hidden}>
            RapiD is a Block Chain Application to provide max Security, Suvidha
            and Services for filing F.I.R.'s i.e. First Information Report for
            both Police Services as well as General Public.
          </div>

          <div className={styles.ques}>
            <h2>What is BlockChain ?</h2>
          </div>
          {a3 ? (
            <div className={styles.arrow} onClick={clicked3}>
              &#8963;
            </div>
          ) : (
            <div className={styles.arrowf} onClick={clicked3}>
              &#8964;
            </div>
          )}
          <div className={a3 ? styles.ans : styles.hidden}>
            Blockchain security is a comprehensive risk management system for a
            blockchain network, using cybersecurity frameworks, assurance
            services and best practices to reduce risks against attacks and
            fraud.
            <br />
            In other words rest assured, this technology will help you keep your
            data safe and it cannot be tampered.
          </div>
          <div className={styles.ques}>
            <h2>How will it help Police Officials?</h2>
          </div>
          {a4 ? (
            <div className={styles.arrow} onClick={clicked4}>
              &#8963;
            </div>
          ) : (
            <div className={styles.arrowf} onClick={clicked4}>
              &#8964;
            </div>
          )}
          <div className={a4 ? styles.ans : styles.hidden}>
            It helps police by storing the F.I.Rs in blockchain.
            <br />
            1. It reduces Manpower by reducing the writing workload.
            <br />
            2. It helps storing documentation in a more effective way and is
            accessible to all who are given access.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
