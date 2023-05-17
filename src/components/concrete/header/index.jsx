import React from "react";
import { useNavigate } from 'react-router-dom';

//Styles
import styles from './styles.module.css';

//Images
import logoA from 'static/logo/Cayo_Concess.gif';
import logo from 'static/logo/Black_and_Brown_Retro_Automotive_Logo (1).png'

function Header (){

    const navigate = useNavigate();

    return(
        <>
            <div className={styles.MainBox}>
                <div onClick={() => {navigate("/")}} className={styles.logoA_Box}>
                    <img src={logo} className={styles.logoA} />
                    <p className={styles.HeaderTitle}>Cayo Automobile</p>
                </div>
                <div className={styles.Nav}>
                    <button className={styles.NavBtn} onClick={() => {navigate("/catalogue")}}>
                        Catalogue
                    </button>
                    <button className={styles.NavBtn} onClick={() => {navigate("/contact")}}>
                        Contact
                    </button>
                </div>
            </div>
            <div className={styles.linearline}>

            </div>
        </>
    )
}

export default Header;