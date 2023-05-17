import React from "react";
//Styles
import styles from './styles.module.css';

import {GiHouseKeys} from "react-icons/gi"
import {BsPersonVcardFill} from "react-icons/bs"
import {IoCarSportSharp} from 'react-icons/io5'
//Images

function Card (props){
    const {icon, Title, text} = props 
    return(
        <>
            <div className={styles.CardBox}>
                <div className={styles.Icondiv}>
                    {icon === "key" ? 
                    <GiHouseKeys size={80} color="#FF5757"/>
                    :
                    icon === "card" ?
                    <BsPersonVcardFill size={80} color="#FF5757"/>
                    : 
                    icon === "car" ? 
                    <IoCarSportSharp size={80} color="#FF5757"/>
                    : 
                    null
                    }
                
                </div>
                <div className={styles.TextCard}>
                <p className={styles.Title}>{Title}</p>
                <p className={styles.DescText}>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Card;