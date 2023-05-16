import React from "react";
//Styles
import styles from './styles.module.css';

//Images

function Box (props){
    const {img} = props 
    return(
        <>
            <div className={styles.MainBox}>
                <img src={img} />
            </div>
        </>
    )
}

export default Box;