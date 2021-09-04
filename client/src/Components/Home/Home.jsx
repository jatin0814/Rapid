import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Widgets } from "@material-ui/icons";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Home.css";
import { Link } from "react-router-dom";
import Particlebachground from "../Particle/Particlebachground";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import DraftsIcon from "@material-ui/icons/Drafts";
import DescriptionIcon from "@material-ui/icons/Description";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
function Home() {
  return (
    <div className="homepage">
      <Particlebachground />
      <CenterTitle />
    </div>
  );
}

function CenterTitle() {
  const { text } = useTypewriter({
    words: [
      "File a F.I.R. securely",
      "Quick Contact with Police",
      "Online F.I.R. for public",
      "Status of your F.I.R",
    ],
    loop: 0,
    cursorStyle: "_",
  });
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <div className="mainpage">
          <div className="header">
            <div className="logo">RAPID</div>
            <ul className="social">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <DraftsIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className="head">
            <h1 className="headtxt">
              <span className="rapid">RapiD helps you</span>
              <span className="rapidtext">{text}</span>

              <Cursor />
            </h1>
            <p>
              RapiD uses Block Chain implementation to provide max Security,
              Suvidha and Services.
            </p>

            <Link to="/about" className="but1">
              About
            </Link>
            <Link to="/login" className="but2">
              Login
            </Link>
          </div>
          <div className="footwhite">
            <ul className="footerul">
              <li>
                <div className="box">
                  <div className="iconbox1">
                    <DescriptionIcon className="iconwhite" />
                  </div>
                  <div className="box2">
                    <p>Registered</p>
                    <p className="big">120</p>
                  </div>
                  <h1>All time</h1>
                </div>
              </li>
              <li>
                <div className="box">
                  <div className="iconbox2">
                    <PersonAddIcon className="iconwhite" />
                  </div>
                  <div className="box2">
                    <p>Online F.I.R.</p>
                    <p className="big">48</p>
                  </div>
                  <h1>Last Month</h1>
                </div>
              </li>
              <li>
                <div className="box">
                  <div className="iconbox3">
                    <DoneAllIcon className="iconwhite" />
                  </div>
                  <div className="box2">
                    <p>F.I.R accepted</p>
                    <p className="big">60</p>
                  </div>
                  <h1>Last Month</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Modalhome = () => {
  <div className="modalhome">Abs</div>;
};
export default Home;
