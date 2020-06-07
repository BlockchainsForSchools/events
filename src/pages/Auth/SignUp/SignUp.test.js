import React from "react";
import { render, wait, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import { SignUp } from "./SignUp";

test("Signup form has correct fields", async () => {
	const { container } = render(
		<BrowserRouter>
			<SignUp />
		</BrowserRouter>
	);
	const firstName = container.querySelector('input[name="firstName"]');
	const lastName = container.querySelector('input[name="lastName"]');
	const email = container.querySelector('input[name="email"]');
	const password = container.querySelector('input[name="password"]');
	const confirmPassword = container.querySelector('input[name="password2"]');
	const submit = container.querySelector('button[type="submit"]');

	await wait(() => {
		fireEvent.change(firstName, {
			target: {
				value: "mockFirstName"
			}
		});
	});

	await wait(() => {
		fireEvent.change(lastName, {
			target: {
				value: "mockLastName"
			}
		});
	});

	await wait(() => {
		fireEvent.change(email, {
			target: {
				value: "mock@email.com"
			}
		});
	});

	await wait(() => {
		fireEvent.change(password, {
			target: {
				value: "password"
			}
		});
	});

	await wait(() => {
		fireEvent.change(confirmPassword, {
			target: {
				value: "password"
			}
		});
	});

	await wait(() => {
		fireEvent.click(submit);
	});

	expect(firstName.target.value).toBe("mockFirstName");
});
