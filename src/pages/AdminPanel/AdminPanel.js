// @flow
import React, {Fragment} from "react";

import AdminAppBar from "./AdminAppBar";
import Content from "./Content";

export const AdminPanel = (props: PropTypes) => {
	return (
		<Fragment>
			<AdminAppBar />
			<Content />
		</Fragment>
	);
};

export default AdminPanel;
