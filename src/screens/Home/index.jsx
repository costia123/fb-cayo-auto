import React, {useEffect} from "react";
import Header from "components/concrete/header";
import Services from "components/concrete/services";
import { useDispatch, useSelector } from "react-redux";
import { getStrapiCar, getStrapiCat } from "redux/strapi/action";

function Home(props) {
	const strapi = useSelector(state => state.strapi)
	const dispatch = useDispatch()
	useEffect(() => {
        if (!strapi.StrapriCar) {
            dispatch(getStrapiCar());
			dispatch(getStrapiCat())
        }
    }, [strapi]);
	return (
		<>
			<Header />
			<Services />
		</>
	);
}

export default Home;
