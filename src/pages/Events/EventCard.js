// @flow
import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export const EventCard = (props: PropTypes) => {
	const classes = useStyles();
	const { event } = props;

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={event.imgURL}
				title={event.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{event.name}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					Description of the event.
				</Typography>
				<Typography variant="body2">{event.startTime}</Typography>
				<Typography variant="body2">{event.endTime}</Typography>
				<ul>
					{event.Tags.map((tag) => (
						<li>
							<Typography variant="body2" key={tag.id}>
								{tag.tag}
							</Typography>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default EventCard;
