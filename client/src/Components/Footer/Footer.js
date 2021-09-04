import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import DraftsIcon from "@material-ui/icons/Drafts";

const Footer = () => {
  const location = useLocation();
  const loc = location.pathname !== "/";

  const start = (
    <div className={styles.footer}>
      <div className={styles.flex}>
        <div className={styles.fitems}>
          <ul className={styles.fitemli}>
            <li>
              <Link to="/creators">About</Link>
            </li>

            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <a href="https://uppolice.gov.in/">U.P. Police</a>
            </li>
          </ul>
        </div>
        <div className={styles.fitems}>
          <ul className={styles.fitemli}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link to="/">Sign Out</Link>
            </li>
            <li>
              <Link href="/myrequest">My Request</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.last}> ErrOr 4:O4</div>
      <div className={styles.fitemsm}>
        <ul className={styles.fitemli}>
          <li>
            <a href="https://github.com/extend">
              <PhoneIcon />
            </a>
          </li>

          <li>
            <a href="https://instagram.com/extend">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="mailto:support@extend.com">
              <DraftsIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/extend">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div className={styles.last2}>...RapiD...</div>
    </div>
  );
  return loc ? start : <p></p>;
};

export default Footer;
