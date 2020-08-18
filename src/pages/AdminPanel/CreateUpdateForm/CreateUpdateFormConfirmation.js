import React from "react";

import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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
			<List>
				<ListItem>
					<ListItemText>
						<ListItemText
							primary="Update Title"
							secondary={title}
						/>
					</ListItemText>
				</ListItem>
				<pre>{content}</pre>
			</List>
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
