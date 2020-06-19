import React from "react";
import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import blockchainPlaceholder from "./blockchain_placeholder.jpg";

type PropTypes = {};

const useStyles = makeStyles({
	root: {
		height: 400,
		width: "100%"
	},
	media: {
		height: "100%",
		alignContent: "center"
	}
});

const Item = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CardMedia
				image={blockchainPlaceholder}
				className={classes.media}
			/>
		</div>
	);
};

const EventPageImageCarousel = (props: PropTypes) => {
	const items = [{}, {}, {}];
	return (
		<Carousel>
			{items.map((item) => (
				<Item item={item} />
			))}
		</Carousel>
	);
};

export default EventPageImageCarousel;
