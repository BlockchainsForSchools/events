// @flow
import React, { Fragment, useEffect, useRef, useState } from "react";

import FadeInAppBar from "./FadeInAppBar";
import Hero from "./Hero";
import Content from "./Content";

type PropTypes = {};

export const Home = (props: PropTypes) => {
	let [heroHeight, setHeroHeight] = useState(0);

	useEffect(() => {
		setHeroHeight(document.getElementById("hero")?.clientHeight);
	}, [heroHeight]);

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
