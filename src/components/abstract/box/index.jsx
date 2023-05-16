import React from "react";
//Styles
import styles from './styles.module.css';

//Images

function Box (props){
    const {img, Title} = props 
    return(
        <>
            <div className={styles.MainBox}>
                <div className={styles.MainBox2}>
                <img  className={styles.caticon} src={`http://localhost:1337${img}`} />
                </div>
                <h2  className={styles.catTitle}>{Title}</h2>
            </div>
        </>
    )
}

export default Box;