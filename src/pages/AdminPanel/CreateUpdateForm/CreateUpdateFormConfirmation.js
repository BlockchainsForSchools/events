import React from "react";

import { Typography, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const ReactMarkdown = require("react-markdown");

type PropTypes = {};

const CreateUpdateFormConfirmation = (props: PropTypes) => {
	const continueToNextStep = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const goBackToPreviousStep = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const { values } = props;
	const { title, content } = values;

	return (
		<ThemeProvider>
			<Typography component="h1" variant="h4">
				Update Title: {title}
			</Typography>
			<br />
			<Typography component="h1" variant="h4">
				Update Content
			</Typography>

			<ReactMarkdown source={content} />
			<br />

			<Button
				color="secondary"
				variant="contained"
				onClick={goBackToPreviousStep}
			>
				Back
			</Button>

			<Button
				color="primary"
				variant="contained"
				onClick={continueToNextStep}
			>
				Confirm & Continue
			</Button>
		</ThemeProvider>
	);
};

export default CreateUpdateFormConfirmation;
