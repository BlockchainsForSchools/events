// @flow

import React, { Component } from "react";

import CreateEventFormDetails from "./CreateEventFormDetails";
import CreateEventFormConfirmation from "./CreateEventFormConfirmation";
import CreateEventFormSuccess from "./CreateEventFormSuccess";

class CreateEventForm extends Component {
	state = {
		step: 1,
		name: "",
		url: "",
		startTime: "",
		endTime: "",
		location: "",
		tags: "",
		imageUrl: ""
	};

	// Step handlers

	/**
	 * Proceed to the next step of the form
	 * Condition: current step must be less than 2.
	 * */

	nextStepHandler = () => {
		const { step } = this.state;
		// if (step >= 3) return;
		this.setState({ step: step + 1 });
	};

	/**
	 * Go back to the previous step of the form
	 * Condition: current step must be more than 1.
	 * */

	prevStepHandler = () => {
		const { step } = this.state;
		// if (step <= 1) return;
		this.setState({ step: step - 1 });
	};

	// Field change handler

	fieldChangeHandler = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const {
			name,
			url,
			startTime,
			endTime,
			location,
			tags,
			imageUrl
		} = this.state;

		// TODO: Use this when tags is an array state property.
		// const copiedTagsArray = Array.from(tags);

		const formValues = {
			name,
			url,
			startTime,
			endTime,
			location,
			tags,
			imageUrl
		};

		switch (step) {
			case 1:
				return (
					<CreateEventFormDetails
						nextStep={this.nextStepHandler}
						onFieldChange={this.fieldChangeHandler}
						values={formValues}
					/>
				);
			case 2:
				return (
					<CreateEventFormConfirmation
						prevStep={this.prevStepHandler}
						nextStep={this.nextStepHandler}
						values={formValues}
					/>
				);
			case 3:
				return <CreateEventFormSuccess />;
			default:
				break;
		}
	}
}

export default CreateEventForm;
