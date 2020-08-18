// @flow
import {AppBar, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

type PropTypes = {};

const useStyles =
    makeStyles((theme) => ({
                 appBar : {color : "white", padding : theme.spacing(1)},
                 toolbarButtons : {marginLeft : "auto"}
               }));

const AdminAppBar = (props: PropTypes) => {
  const classes = useStyles();

        return (
		<AppBar className={classes.appBar} position="fixed">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5">Admin Panel</Typography>
				<div className={classes.toolbarButtons}>
					<Button color="inherit" href="/">
                                                Log Out
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default AdminAppBar;
