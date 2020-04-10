// @flow
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import {
    Button,
    Link,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import backend from "../utils/backend";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("email: " + email);
    console.log("password: " + password);
    backend
        .post("/api/auth/login", {
            email: email,
            password: password,
        })
        .then((response) => {
            console.log(response);
        });
};

const successResponseGoogle = (response) => {
    var id_token = response.getAuthResponse().id_token;
    console.log(id_token);
    backend
        .post("/api/auth/oauthlogin", {
            token: id_token,
        })
        .then((response) => {
            console.log(response);
        });
};

const failureResponseGoogle = (response) => {
    console.log("error: " + response.error);
    console.log("details: " + response.details);
};

export const Login = (props: PropTypes) => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Log In
                </Typography>
                <br />
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Continue with Google"
                    onSuccess={successResponseGoogle}
                    onFailure={failureResponseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
                <form
                    onSubmit={handleLogin}
                    className={classes.form}
                    noValidate
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link
                                component={RouterLink}
                                to="/sign-up"
                                variant="body2"
                            >
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
