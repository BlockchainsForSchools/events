import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import { Login } from "./Login";

Enzyme.configure({ adapter: new Adapter() });

describe("<Login />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders the proper text fields", () => {
		expect(
			wrapper.contains(
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
			)
		).toBe(true);
		
		expect(
			wrapper.contains(
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
			)
		).toBe(true);
	});
});
