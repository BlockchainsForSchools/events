import React from "react";
import { CardMedia, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import mapsEmbed from "./maps_embed.png";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	bodySection: {
		display: "flex"
	},
	descriptionSection: {
		flexBasis: "50%",
		paddingLeft: "100px",
		paddingRight: "100px",
		textAlign: "left"
	},
	infoSection: {
		flexBasis: "50%",
		paddingLeft: "100px",
		paddingRight: "100px",
		textAlign: "left"
	},
	infoButton: {
		marginRight: "25px"
	},
	media: {
		height: "311px",
		borderRadius: "35px"
	}
}));

const EventPageBody = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<div className={classes.bodySection}>
			<div className={classes.descriptionSection}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Curabitur dictum eros elit, sit amet porta lacus semper
					quis. Donec blandit ante nec est ullamcorper vehicula. Morbi
					justo urna, ornare ac pellentesque sit amet, feugiat sed
					elit. Nulla tristique nisl eget nibh dictum convallis. In
					ullamcorper nisi nec ligula blandit semper. Aenean vel nisi
					interdum, ornare ligula ut, facilisis nisl. Pellentesque at
					tellus lobortis, bibendum ipsum ut, scelerisque justo. In
					finibus molestie risus sed hendrerit. Ut id aliquet elit.
					Morbi nec auctor nisi, ac maximus arcu. Mauris ac sodales
					leo. Quisque facilisis nec lorem eu sollicitudin. Sed non
					maximus nibh. Aenean ultrices ligula eu finibus placerat.
					Curabitur vel ultrices sem. Aenean aliquam vestibulum ex,
					sed blandit metus scelerisque eget. Aenean iaculis mollis
					turpis, ac accumsan odio. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Mauris in faucibus diam, ut
					cursus libero. Nullam id leo at ex commodo sodales a vitae
					leo. Aenean vehicula felis eu ligula dapibus egestas. Cras
					sit amet nunc augue. Sed ac ornare ipsum. Donec sit amet
					dapibus orci. Aliquam vel erat nulla. Integer sapien ligula,
					egestas quis nibh in, tincidunt dictum ante. Maecenas dui
					orci, porta vitae ornare eleifend, vulputate nec nisi.
					Nullam cursus ligula in mi molestie ultrices. Duis interdum
					dolor sit amet urna hendrerit tristique. Donec malesuada
					luctus lectus sed convallis. Nunc pulvinar, felis non
					condimentum dignissim, sapien est commodo elit, vel commodo
					eros dui quis arcu. Nam venenatis tortor sit amet sapien
					pulvinar volutpat. Suspendisse sit amet vestibulum nisi, id
					lobortis justo. Vestibulum ut fermentum elit, vel pharetra
					tellus. Praesent ultricies augue a diam tincidunt, vitae
					vehicula ex mollis. Proin sit amet metus porttitor, cursus
					est et, rhoncus urna. Morbi eget diam aliquam urna luctus
					gravida. Cras ac purus eget ligula vehicula scelerisque.
					Nulla purus sem, ultricies eu ultrices sed, condimentum non
					tortor. Nullam pharetra fringilla ipsum, ultrices bibendum
					tellus fringilla id. In erat augue, porta et ex quis,
					consequat tristique quam. Pellentesque at dui tristique,
					auctor ex sed, dapibus turpis. Sed lacinia lacinia diam,
					sollicitudin porta lectus euismod at. Mauris dictum nulla at
					auctor congue. Vivamus in posuere elit, vitae finibus eros.
					Nullam non elementum est. Nulla consectetur ultricies
					ornare. Nam sed lectus nec turpis blandit bibendum vitae in
					quam. Proin sollicitudin at massa id sodales. Donec sit amet
					quam et ipsum semper porta. Integer condimentum aliquet
					risus. Duis in consequat turpis. Aliquam consectetur
					molestie nisi, non vehicula sem posuere vel. Sed eu libero
					ac ante finibus posuere. Maecenas nec ipsum felis. Nulla
					vitae porta tellus, et accumsan leo.
				</p>
			</div>
			<div className={classes.infoSection}>
				<CardMedia image={mapsEmbed} className={classes.media} />
				<h4>How To Get Started With Blockchain @ Deloitte 02/25</h4>
				<p>
					Scholmburg Center For Research In Black Culture 515 Malcolm
					X Boulevard New York, NY 10037
				</p>
				<br />
				<h4>Date / Time</h4>
				<p>January 25 from 4pm - 7pm</p>
				<br />
				<Button
					disabled
					variant="contained"
					color="primary"
					className={classes.infoButton}
				>
					Interested
				</Button>
				<Button
					variant="contained"
					color="primary"
					className={classes.infoButton}
				>
					Apply
				</Button>
			</div>
		</div>
	);
};

export default EventPageBody;
