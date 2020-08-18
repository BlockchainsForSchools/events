import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	linkButton: {
		color: "white",
		margin: "1vh"
	}
}));

const CreateUpdateFormSuccess = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<div>
			<h1>You have successfully created an update!</h1>
			<Button
				className={classes.linkButton}
				color="primary"
				variant="contained"
				size="large"
				href="/admin"
			>
				Back to Admin Panel
			</Button>
		</div>
	);
};

export default CreateUpdateFormSuccess;
