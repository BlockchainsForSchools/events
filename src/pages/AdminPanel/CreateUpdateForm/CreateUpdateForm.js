// @flow
import React, { Component } from "react";

import CreateUpdateFormConfirmation from "./CreateUpdateFormConfirmation";
import CreateUpdateFormDetails from "./CreateUpdateFormDetails";
import CreateUpdateFormSuccess from "./CreateUpdateFormSuccess";

class CreateUpdateForm extends Component {
	state = { step: 1, title: "", content: "" };

	nextStepHandler = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	prevStepHandler = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	fieldChangeHandler = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const { title, content } = this.state;

		const formValues = { title, content };

		switch (step) {
			case 1:
				return (
					<CreateUpdateFormDetails
						nextStep={this.nextStepHandler}
						onFieldChange={this.fieldChangeHandler}
						values={formValues}
					/>
				);
			case 2:
				return (
					<CreateUpdateFormConfirmation
						prevStep={this.prevStepHandler}
						nextStep={this.nextStepHandler}
						values={formValues}
					/>
				);
			case 3:
				return <CreateUpdateFormSuccess />;
			default:
				break;
		}
	}
}

export default CreateUpdateForm;
