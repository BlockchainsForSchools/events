import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Login } from './Login';

test('Signup form is submittable', async () => {
  const { container } = render(<Login />);
  const email = container.querySelector('input[name="email"]');
  const password = container.querySelector('input[name="password"]');
  const submit = container.querySelector('button[type="submit"]');
  const results = container.querySelector("makestyles-form-2");

  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: "mock@email.com"
      }
    })
  })

  await wait(() => {
    fireEvent.change(password, {
      target: {
        value: "password"
      }
    })
  })

  await wait(() => {
      fireEvent.click(submit)
    })

  expect(results.innerHTML).toBe(
    '{"email":"mock@email.com","name":"mockname","color":"green"}'
  )
});

