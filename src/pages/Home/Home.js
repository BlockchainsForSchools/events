// @flow
import React, { Fragment, useState, useCallback } from "react";

import FadeInAppBar from "./FadeInAppBar";
import Hero from "./Hero";
import Content from "./Content";

type PropTypes = {};

export const Home = (props: PropTypes) => {
	const [height, setHeight] = useState(0);

	const measuredRef = useCallback((node) => {
		if (node !== null) {
			setHeight(node.getBoundingClientRect().height);
		}
	}, []);

	return (
		<Fragment>
			<FadeInAppBar />
			<Hero ref={measuredRef} />
			<Content heroHeight={height} />
		</Fragment>
	);
};

export default Home;
