import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

type PropTypes = {};

const createEventFormDetails = (props) => {
	const continueToNextStep = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const { values, onFieldChange } = props;
	return (
		<ThemeProvider>
			<Typography component="h1" variant="h4">
				Create Event
			</Typography>

			<TextField
				label="Event name"
				variant="outlined"
				margin="normal"
				defaultValue={values.eventName}
				onChange={onFieldChange("name")}
			/>
			<br />
			<TextField
				label="Event URL"
				variant="outlined"
				margin="normal"
				defaultValue={values.eventUrl}
				onChange={onFieldChange("url")}
			/>
			<br />
			<TextField
				label="Start time"
				variant="outlined"
				margin="normal"
				defaultValue={values.startTime}
				onChange={onFieldChange("startTime")}
			/>
			<br />
			<TextField
				label="End time"
				variant="outlined"
				margin="normal"
				defaultValue={values.endTime}
				onChange={onFieldChange("endTime")}
			/>
			<br />
			<TextField
				label="Event location"
				variant="outlined"
				margin="normal"
				defaultValue={values.location}
				onChange={onFieldChange("location")}
			/>
			<br />
			<TextField
				label="Tags"
				variant="outlined"
				margin="normal"
				defaultValue={values.tags}
				onChange={onFieldChange("tags")}
			/>
			<br />
			<TextField
				label="Event image URL"
				variant="outlined"
				margin="normal"
				defaultValue={values.imageUrl}
				onChange={onFieldChange("imageUrl")}
			/>
			<br />
			<Button
				color="primary"
				variant="contained"
				onClick={continueToNextStep}
			>
				Continue
			</Button>
		</ThemeProvider>
	);
};

export default createEventFormDetails;
