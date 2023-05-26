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
export const getStrapiCat = () => dispatch => {
  /*     setSpinner(true) */
  axios.get(`http://localhost:1337/api/categories?populate=*`).then((response) => {
  /*     setSpinner(false) */
      console.log(response)
      dispatch({
          type: strapi.GET_STRAPI_CAT,
          payload: response.data.data
      })
  }).catch(function (error) {
    console.log(error)
  })
  }
  export const getStrapiCar = () => dispatch => {
    /*     setSpinner(true) */
    axios.get(`http://localhost:1337/api/cars?populate=*`).then((response) => {
    /*     setSpinner(false) */
        console.log(response)
        dispatch({
            type: strapi.GET_STRAPI_CAR,
            payload: response.data.data
        })
    }).catch(function (error) {
      console.log(error)
    })
    }