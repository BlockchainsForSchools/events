import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { SignUp } from './SignUp';

test('Signup form is submittable', async () => {
  const { container } = render(<SignUp />);
  const firstName = container.querySelector('input[name="firstname"]');
  const lastName = container.querySelector('input[name="lastname"]');
  const password = container.querySelector('input[name="password"]');
  const confirmPassword = container.querySelector('input[name="confirmPassword"]');
  const results = container.querySelector("makestyles-form-2");

  await wait(() => {
    fireEvent.change(name, {
      target: {
        value: 'mockname',
      },
    });
  });

  await wait(() => {
    fireEvent.change(email, {
      target: {
        value: 'mock@email.com',
      },
    });
  });

  await wait(() => {
    fireEvent.click(submit);
  });

  expect(results.innerHTML).toBe(
    '{"email":"mock@email.com","name":"mockname","color":"green"}'
  );
});
