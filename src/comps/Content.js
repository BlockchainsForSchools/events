import React from "react";
import { Route, Switch } from "react-router-dom";

import AdminPanel from "../pages/AdminPanel/AdminPanel";
import CreateUpdateForm from "../pages/AdminPanel/CreateUpdateForm/CreateUpdateForm";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import CreateEventForm from "../pages/Events/CreateEventForm/CreateEventForm";
import EventPage from "../pages/Events/EventPage/EventPage";
import Events from "../pages/Events/Events";
import Home from "../pages/Home/Home";

const Content = () => {
	return (
		<div>
			<Switch>
				<Route path={"/"} component={Home} exact />
				<Route path={"/login"} component={Login} exact />
				<Route path={"/sign-up"} component={SignUp} exact />
				<Route path={"/events"} component={Events} exact />
				<Route path={"/event/:url"} component={EventPage} />
				<Route path={"/admin"} component={AdminPanel} />
				<Route
					path={"/create-update"}
					component={CreateUpdateForm}
					exact
				/>{" "}
				<Route
					path={"/create-event"}
					component={CreateEventForm}
					exact
				/>
			</Switch>
		</div>
	);
};

export default Content;
