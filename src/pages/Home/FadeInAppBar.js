// @flow
import React, { memo } from "react";
import { AppBar, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	appBar: {
		color: "white",
		padding: theme.spacing(1),
	},
	backgroundTransparent: {
		padding: theme.spacing(1),
		background: "transparent",
		boxShadow: "none"
	},
	toolbarButtons: {
		marginLeft: "auto",
	}
}));

const FadeInAppBar = (props: PropTypes) => {
	console.log(props);
	const classes = useStyles();
	const trigger = useScrollTrigger({ threshold: 570 });

	return (
			<AppBar className={`${classes.appBar} ${trigger ? null : classes.backgroundTransparent}`} position="fixed">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5">Events</Typography>
					<div className={classes.toolbarButtons}>
						<IconButton aria-label="search" color="inherit">
							<SearchIcon />
						</IconButton>
						<IconButton aria-label="more" color="inherit">
							<MoreVertIcon />
						</IconButton>
						<Button color="inherit">Sign In</Button>
					</div>
				</Toolbar>
			</AppBar>
	);
};

export default memo(FadeInAppBar);
