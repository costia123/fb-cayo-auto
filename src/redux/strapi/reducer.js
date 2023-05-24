import { strapi } from "redux/types";

const initialState = {
  strapiPage: null,
  strapiLogo: null,
  strapiImage: null,
  strapiCat: null,
  StrapriCar: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case strapi.GET_STRAPI_CAT:
      return {
        ...state,
        strapiCat: action.payload,
      };
    case strapi.GET_STRAPI_CAR:
      return {
        ...state,
        StrapriCar: action.payload,
      };
    /* 
        case strapi.GET_STRAPI_IMAGE:
            return {
                ...state,
                strapiImage: action.payload
            } */
    default:
      return state;
  }
};
export default reducer;
