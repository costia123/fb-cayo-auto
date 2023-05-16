import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { getStrapiPage } from "redux/strapi/action";
//Styles
import styles from './styles.module.css';

//Comp
import Box from "components/abstract/box";

function Catbox (){
	const strapi = useSelector(state => state.strapi)
	const dispatch = useDispatch()
	useEffect(() => {
        if (!strapi.strapiPage) {
            dispatch(getStrapiPage("categories?populate=*"));
        }
    }, [strapi]);

    const navigate = useNavigate();

    return(
        <>
            <div className={styles.MainBox}>
                <div className={styles.catlist}>

                {strapi.strapiPage != null ? strapi.strapiPage.data.data.map((item, index) => {
                    return(
                        
                        <Box 
                        Title={item.attributes.Titre}
                        img={item.attributes.icon.data.attributes.url}
                        />
                        )
                        
                    })
                    
                    :
                    null 
                }
                </div>
            </div>
        </>
    )
}

export default Catbox;