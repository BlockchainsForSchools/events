import React from "react";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	mainSection: {
		marginTop: "50px",
		marginBottom: "50px",
		paddingLeft: "50px"
	},
	headerText: {
		textAlign: "left",
		marginBottom: "25px"
	},
	similarEvents: {
		display: "flex"
	},
	root: {
		width: "345px",
		marginRight: "50px",
		textAlign: "left"
	},
	media: {
		height: "140px"
	},
	learnMore: {
		float: "right"
	}
}));

const EventPageBody = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<div class={classes.mainSection}>
			<div class={classes.headerText}>
				<Typography component="h1" variant="h4">
					Similar Events:
				</Typography>
			</div>
			<div class={classes.similarEvents}>
				<Card className={classes.root}>
					<CardMedia className={classes.media} />
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							Other Event
						</Typography>
						<Typography color="textSecondary" component="p">
							Stuff
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" className={classes.learnMore}>
							Learn More
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardMedia className={classes.media} />
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							Other Event
						</Typography>
						<Typography color="textSecondary" component="p">
							Stuff
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" className={classes.learnMore}>
							Learn More
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
					<CardMedia className={classes.media} />
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							Other Event
						</Typography>
						<Typography color="textSecondary" component="p">
							Stuff
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" className={classes.learnMore}>
							Learn More
						</Button>
					</CardActions>
				</Card>
			</div>
		</div>
	);
};

export default EventPageBody;
