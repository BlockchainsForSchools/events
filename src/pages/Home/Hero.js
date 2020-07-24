// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import HeroImage from "./hero-image.jpg";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	hero: {
		width: "100vw",
		height: "570px",
		maxWidth: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "white",
		backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.4), rgba(0, 0, 100, 0.4)), url(${HeroImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed"
	},
	heroText: {
		fontWeight: 400,
		margin: theme.spacing(1)
	},
	heroBtn: {
		margin: theme.spacing(1)
	},
	heroIcon: {
		width: "100px",
		height: "100px"
	}
}));

export const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export const Hero = (props: PropTypes) => {
	const classes = useStyles();

	const scrollDown = () => {
		scrollToRef(props.scrollRef);
	};

	return (
		<div className={classes.hero} id="hero">
			<Typography variant="h2" className={classes.heroText}>
				Expand your horizons
			</Typography>
			<IconButton
				className={classes.heroBtn}
				aria-label="more"
				color="inherit"
				onClick={scrollDown}
			>
				<ExpandMoreIcon className={classes.heroIcon} />
			</IconButton>
		</div>
	);
};

export default Hero;
