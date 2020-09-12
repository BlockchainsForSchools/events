import { Button, TextField, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

type PropTypes = {};

const createUpdateFormDetails = (props: PropTypes) => {
	const continueToNextStep = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const { values, onFieldChange, onMDEChange } = props;
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
			<SimpleMDE
				value={values.content}
				onChange={onMDEChange}
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
