import React from "react";
import Particles from "react-particles-js";
import Particleconfig from "./Particleconfig";
import styles from "./Particle.module.css";
const Particlebachground = () => {
  return <Particles params={Particleconfig} className={styles.particles} />;
};

export default Particlebachground;
