import React from "react";
import { useNavigate } from "react-router-dom";

//Styles
import styles from "./styles.module.css";

//Images
import logoA from "static/logo/Cayo_Concess.gif";
import logo from "static/logo/Black_and_Brown_Retro_Automotive_Logo (1).png";

function Footer() {
  const navigate = useNavigate();
  const date = new Date
  const year = date.getFullYear()
  return (
    <>
    <div className={styles.line}></div>
      <div className={styles.footerMainBox}>
        <div className={styles.footerline}>
            <p style={{color: "white"}}>Developed by Jeff 2023 - {year} © </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
