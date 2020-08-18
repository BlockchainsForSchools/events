// @flow
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

type PropTypes = {};

const useStyles = makeStyles((theme) => ({
                               content : {
                                 marginTop : 1,
                                 padding : "10vh 10vw 10vh 10vw",
                                 textAlign : "center"
                               },
                               linkButton : {color : "white", margin : "1vh"}
                             }));

export const Content = (props: PropTypes) => {
  const classes = useStyles();

        return (
		<div className={classes.content}>
			<Button
        className = {classes.linkButton} color = "primary"
        variant = "contained"
        size = "large"
        href =
            "/create-update" > {" "} Create an Update</Button>
			<br />< Button
        className = {classes.linkButton} color = "primary"
        variant = "contained"
        size = "large"
                                href="/create-event"
			>
				Create an Event
			</Button>
		</div>
	);
};

export default Content;
