import React, { Component, Fragment } from "react";

import EventPageAppBar from "./EventPageAppBar/EventPageAppBar";
import EventPageImageCarousel from "./EventPageImageCarousel/EventPageImageCarousel";
import EventPageHeader from "./EventPageHeader/EventPageHeader";

class EventPage extends Component {
  render() {
    console.log(this.props.match.params.url);
		return (
			<Fragment>
				<EventPageAppBar />
				<EventPageImageCarousel />
				<EventPageHeader />
			</Fragment>
		);
	}
}

export default EventPage;
