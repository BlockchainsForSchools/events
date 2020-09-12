// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GoogleLogin } from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";

import authserver from "../../../utils/authserver";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
	loginForm: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
}));

const handleLogin = (event) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	console.log("email: " + email);
	console.log("password: " + password);
	// backend
	// 	.post("/api/auth/login", {
	// 		email: email,
	// 		password: password
	// 	})
	// 	.then((response) => {
	// 		console.log(response);
	// 	});
};

const successResponseGoogle = (response) => {
	var id_token = response.getAuthResponse().id_token;
	console.log(id_token);
	// backend
	// 	.post("/api/auth/oauthlogin", {
	// 		token: id_token
	// 	})
	// 	.then((response) => {
	// 		console.log(response);
	// 	});
};

const failureResponseGoogle = (response) => {
	console.log("error: " + response.error);
	console.log("details: " + response.details);
};

const LogInDialog = (props: PropTypes) => {
	const classes = useStyles();
	const { open, handleClose } = props;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
		>
			<DialogTitle id="form-dialog-title">Log In</DialogTitle>
			<DialogContent className={classes.loginForm}>
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Continue with Google"
					onSuccess={successResponseGoogle}
					onFailure={failureResponseGoogle}
					cookiePolicy={"single_host_origin"}
				/>
                <br />
				<form onSubmit={handleLogin} noValidate>
					<TextField
						variant="outlined"
						margin="dense"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button type="submit" color="primary">
							Log In
						</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default LogInDialog;
