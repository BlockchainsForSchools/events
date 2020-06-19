import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	root: {
		height: 65,
	},
	title: {
		flexGrow: 1,
		textAlign: "start"
	},
	searchButton: {
		marginRight: theme.spacing(2)
	},
	kebabMenu: {},
	signInButton: {}
}));

const EventPageAppBar = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<AppBar position="sticky" className={classes.root}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Events
				</Typography>
				<IconButton
					aria-label="search"
					aria-haspopup="true"
				>
					<SearchIcon />
				</IconButton>
				<IconButton
					aria-label="more"
					aria-haspopup="true"
				>
					<MoreVertIcon />
				</IconButton>
				<Button>Sign In</Button>
			</Toolbar>
		</AppBar>
	);
};

export default EventPageAppBar;
