import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Home from "screens/Home";

function App() {
	
	return (
		<>
		<Routes>
			{/* <Switch> */}
				<Route path="/">
					<Home />
				</Route>
			{/* </Switch> */}
		</Routes>
		</>
	);
}

export default App;
