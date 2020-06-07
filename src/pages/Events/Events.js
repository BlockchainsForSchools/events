// @flow
import React, { Component } from "react";
import backend from "../../utils/backend";
import EventCard from "./EventCard";

class Events extends Component {
	constructor() {
		super();
		this.state = {
			events: []
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const response = await backend.get("/api/events/upcoming");
		this.setState({
			events: response.data.payload
		});
	};

	render() {
		const { events } = this.state;
		console.log(events);

		return (
			<ul>
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</ul>
		);
	}
}

export default Events;
