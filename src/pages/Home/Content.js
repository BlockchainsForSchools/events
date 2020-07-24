// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	content: {
		height: "500px"
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export const Content = (props: PropTypes) => {
	const classes = useStyles();

	return <h1 className={classes.content}>Content</h1>;
};

export default Content;
