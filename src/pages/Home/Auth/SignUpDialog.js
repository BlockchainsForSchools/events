// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

// import authserver from "../../../utils/authserver";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	signUpForm: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	}
}));

const handleSignUp = (event) => {
	event.preventDefault();
	const firstName = event.target.firstName.value;
	const lastName = event.target.lastName.value;
	const email = event.target.email.value;
	const password = event.target.password.value;
	const password2 = event.target.password2.value;
	console.log("first name: " + firstName);
	console.log("last name: " + lastName);
	console.log("email: " + email);
	console.log("password: " + password);
	console.log("confirm password: " + password2);
};

const SignUpDialog = (props: PropTypes) => {
	const classes = useStyles();
	const { open, handleClose } = props;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
		>
			<DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
			<DialogContent className={classes.signUpForm}>
				<form onSubmit={handleSignUp} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password2"
								label="Confirm Password"
								type="password"
								id="password2"
							/>
						</Grid>
					</Grid>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button type="submit" color="primary">
							Sign Up
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default SignUpDialog;
