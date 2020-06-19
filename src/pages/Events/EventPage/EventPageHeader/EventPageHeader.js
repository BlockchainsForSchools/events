import React from "react";
import classes from "./EventPageHeader.module.css";

type PropTypes = {};

const EventPageHeader = (props: PropTypes) => {
	return (
		<div className={classes.headerText}>
			<h2>How To Get Started With Blockchain @ Deloitte 02/25</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</div>
	);
};

export default EventPageHeader;
