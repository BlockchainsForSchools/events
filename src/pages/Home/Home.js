// @flow
import React, { Fragment, useEffect, useRef, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import FadeInAppBar from "./FadeInAppBar";
import Hero from "./Hero";
import Content from "./Content";

type PropTypes = {};

export const Home = (props: PropTypes) => {
	// TODO: Dynamically retrieve hero height later
	let [heroHeight, setHeroHeight] = useState(0);

	useEffect(() => {
		heroHeight = document.getElementById("hero")?.clientHeight;
		console.log(heroHeight);
	}, [heroHeight]);

	console.log(heroHeight);

	const scrollRef = useRef(null);

	return (
		<Fragment>
			<FadeInAppBar heroHeight={heroHeight} />
			<Hero scrollRef={scrollRef} />
			<Content scrollRef={scrollRef} />
		</Fragment>
	);
};

export default Home;
