// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeroImage from "./hero-image.jpg";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
    hero: {
        width: "100vw",
        height: "100vh",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 100, 0.4), rgba(0, 0, 100, 0.4)), url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    }
}));

export const Hero = (props: PropTypes) => {
	const classes = useStyles();

	return (
        <div className={classes.hero}>
            <h1>Expand your horizons</h1>
        </div>
	);
};

export default Hero;
