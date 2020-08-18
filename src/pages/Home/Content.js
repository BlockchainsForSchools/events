// @flow
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import HeroImage from "./hero-image.jpg";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
                               content : {
                                 height : "150vh",
                                 marginTop : 1,
                                 padding : "10vh 10vw 10vh 10vw",
                                 textAlign : "left"
                               },
                               root : {
                                 maxWidth : 345,
                               },
                               media : {
                                 height : 140,
                               },
                             }));

export const Content = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<div ref={props.scrollRef} className={classes.content}>
			<Typography variant="h3">Featured:</Typography>
			<br />
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={HeroImage}
						title="Bitcoin"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Bitcoin
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Blockchain money machine go brrrrr we call it bitcoin and praise mr satoshi
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
			<br />
			<br />
			<Typography variant="h3">Past Events:</Typography>
			<br />
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={HeroImage}
						title="Bitcoin"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Bitcoin
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Blockchain money machine go brrrrr we call it bitcoin and praise mr satoshi
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
			<br />
		</div>
	);
};

export default Content;
