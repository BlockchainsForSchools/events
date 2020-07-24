// @flow
import React from "react";
import { AppBar, Button, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: "transparent",
		boxShadow: "none",
		color: "white",
	}
}));

const FadeInAppBar = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6">Events</Typography>
				<IconButton aria-label="search" color="inherit">
					<SearchIcon />
				</IconButton>
				<IconButton aria-label="display more actions" edge="end" color="inherit">
					<MoreVertIcon />
				</IconButton>
    			<Button color="inherit">Sign Up</Button>
			</Toolbar>
		</AppBar>
	);
};

export default FadeInAppBar;
