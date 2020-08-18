import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

type PropTypes = {};

const useStyles =
    makeStyles((theme) => ({linkButton : {color : "white", margin : "1vh"}}));

const CreateEventFormSuccess = (props: PropTypes) => {
  const classes = useStyles();

        return (
		<div>
			<h1>You have successfully created an event!</h1>
			<Button
				className={classes.linkButton}
				color="primary"
				variant="contained"
				size="large"
				href="/admin
       "
			>
				Back to Admin Panel
			</Button>
		</div>
	);
};

export default CreateEventFormSuccess;
