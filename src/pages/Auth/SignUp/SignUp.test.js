import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import { TextField } from "@material-ui/core";

import { SignUp } from "./SignUp";

Enzyme.configure({ adapter: new Adapter() });

describe("<SignUp />", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<BrowserRouter>
				<SignUp />
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
					autoComplete="fname"
					name="firstName"
					variant="outlined"
					required
					fullWidth
					id="firstName"
					label="First Name"
					autoFocus
				/>
			)
		).toBe(true);

		expect(
			wrapper.contains(
				<TextField
					variant="outlined"
					required
					fullWidth
					id="lastName"
					label="Last Name"
					name="lastName"
				/>
			)
		).toBe(true);

		expect(
			wrapper.contains(
				<TextField
					variant="outlined"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
				/>
			)
		).toBe(true);

		expect(
			wrapper.contains(
				<TextField
					variant="outlined"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
				/>
			)
		).toBe(true);

		expect(
			wrapper.contains(
				<TextField
					variant="outlined"
					required
					fullWidth
					name="password2"
					label="Confirm Password"
					type="password"
					id="password2"
				/>
			)
		).toBe(true);
	});
});
