import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Content = () => {
	return (
		<div>
			<Switch>
				<Route path={"/"} component={Home} exact/>
				<Route path={"/login"} component={Login} exact/>
				<Route path={"/sign-up"} component={SignUp} exact/>
			</Switch>

		</div>
	)
};


export default Content;
