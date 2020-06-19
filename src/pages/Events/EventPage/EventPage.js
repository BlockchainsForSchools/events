import React, { Component, Fragment } from "react";

import EventPageAppBar from "./EventPageAppBar/EventPageAppBar";
import EventPageImageCarousel from "./EventPageImageCarousel/EventPageImageCarousel";
import EventPageHeader from "./EventPageHeader/EventPageHeader";
import EventPageBody from "./EventPageBody/EventPageBody";
import EventSimilarEvents from "./EventSimilarEvents/EventSimilarEvents"

class EventPage extends Component {
	render() {
		console.log(this.props.match.params.url);
		return (
			<Fragment>
				<EventPageAppBar />
				<EventPageImageCarousel />
				<EventPageHeader />
				<EventPageBody />
				<EventSimilarEvents />
			</Fragment>
		);
	}
}

export default EventPage;
