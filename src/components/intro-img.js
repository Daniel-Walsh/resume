import React from "react";
// import {ReactComponent as Coding} from '../img/coding.svg';
import SVG from "../components/SVG";
import styles from "../components/intro-img.module.scss";

const IntroImg = () => {
  return <SVG.Coding className={styles.introImg} />;
};

export default IntroImg;
