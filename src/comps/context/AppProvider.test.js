import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AppContext, AppProvider } from './AppProvider';

const MockApp = () => {
  const { signedIn } = useContext(AppContext);

  return <div>{typeof signedIn}</div>;
};

test('Context has the correct values.', () => {
  const tree = (
    <AppProvider bypass>
      <MockApp />
    </AppProvider>
  );
  const { getByText } = render(tree);
  expect(getByText('boolean'));
});
