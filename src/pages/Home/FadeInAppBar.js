// @flow
import React, { memo, Fragment } from "react";
import { AppBar, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import LogInDialog from "./Auth/LogInDialog";
import SignUpDialog from "./Auth/SignUpDialog";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	appBar: {
		color: "white",
		padding: theme.spacing(1)
	},
	backgroundTransparent: {
		padding: theme.spacing(1),
		background: "transparent",
		boxShadow: "none"
	},
	toolbarButtons: {
		marginLeft: "auto"
	}
}));

const FadeInAppBar = (props: PropTypes) => {
	const { heroHeight } = props;
	const classes = useStyles();
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: heroHeight
	});

	const [logInOpen, setLogInOpen] = React.useState(false);
	const [signUpOpen, setSignUpOpen] = React.useState(false);

	const handleClickLogIn = () => {
		setLogInOpen(true);
	};

	const handleClickSignUp = () => {
		setSignUpOpen(true);
	};

	const handleLogInClose = () => {
		setLogInOpen(false);
	};

	const handleSignUpClose = () => {
		setSignUpOpen(false);
	};

	return (
		<Fragment>
			<AppBar
				className={`${classes.appBar} ${
					trigger ? null : classes.backgroundTransparent
				}`}
				position="fixed"
			>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5">Events</Typography>
					<div className={classes.toolbarButtons}>
						<IconButton aria-label="search" color="inherit">
							<SearchIcon />
						</IconButton>
						<IconButton aria-label="more" color="inherit">
							<MoreVertIcon />
						</IconButton>
						<Button color="inherit" onClick={handleClickLogIn}>
							Log In
						</Button>
						<Button color="inherit" onClick={handleClickSignUp}>
							Sign Up
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<LogInDialog open={logInOpen} handleClose={handleLogInClose} />
			<SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
		</Fragment>
	);
};

export default memo(FadeInAppBar);
