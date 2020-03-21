// @flow
import React from 'react';
import {
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	Typography,
	Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import backend from '../utils/backend';

type PropTypes = {};

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

const handleLogin = event => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	console.log('email: ' + email);
	console.log('password: ' + password);
	backend
		.post('/auth/login', {
			email: email,
			password: password
		})
		.then(response => {
			console.log(response);
		});
};

export const Login = (props: PropTypes) => {
	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h4'>
					Log In
				</Typography>
				<form onSubmit={handleLogin} className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Log In
					</Button>
					<Grid container justify='center'>
						<Grid item>
							<Link href='/sign-up' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default Login;