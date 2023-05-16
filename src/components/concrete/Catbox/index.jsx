import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { getStrapiPage } from "redux/strapi/action";
//Styles
import styles from './styles.module.css';

//Images

function Catbox (){
	const strapi = useSelector(state => state.strapi)
	const dispatch = useDispatch()
	useEffect(() => {
        if (!strapi.strapiPage) {
            dispatch(getStrapiPage("categories"));
        }
    }, [strapi]);

    const navigate = useNavigate();

    return(
        <>
            <div className={styles.MainBox}>
            </div>
        </>
    )
}

export default Catbox;