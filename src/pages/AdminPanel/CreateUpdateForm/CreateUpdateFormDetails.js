import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

type PropTypes = {};

const createUpdateFormDetails = (props: PropTypes) => {
	const continueToNextStep = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const { values, onFieldChange } = props;
	return (
		<ThemeProvider>
			<Typography component="h1" variant="h4">
				Create Update
			</Typography>

			<TextField
				label="Update title"
				variant="outlined"
				margin="normal"
				defaultValue={values.title}
				onChange={onFieldChange("title")}
			/>
			<br />
			<TextField
				label="Update content"
				variant="outlined"
				margin="normal"
				defaultValue={values.content}
				onChange={onFieldChange("content")}
				placeholder="Write markdown here"
				multiline
				fullWidth="true"
			/>
			<br />
			<Button
				color="primary"
				variant="contained"
				onClick={continueToNextStep}
			>
				Continue to Preview
			</Button>
		</ThemeProvider>
	);
};

export default createUpdateFormDetails;
