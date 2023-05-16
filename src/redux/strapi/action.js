//r

import axios from 'axios'
import { strapi } from "redux/types"

export const getStrapiPage = (name) => dispatch => {
/*     setSpinner(true) */
axios.get(`http://localhost:1337/api/${name}`).then((response) => {
/*     setSpinner(false) */
    console.log(response)
    dispatch({
        type: strapi.GET_STRAPI_PAGE,
        payload: response
    })
}).catch(function (error) {
  console.log(error)
})
}