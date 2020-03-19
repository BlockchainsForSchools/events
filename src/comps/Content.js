import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";

const Content = () => {

	return (
		<div>
			<Switch>
				<Route path={"/"} component={Home} exact/>
			</Switch>

		</div>
	)
};


export default Content;
