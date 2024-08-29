import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PackList from '../components/pack-list/pack-list';

describe('PackList Component', () => {
  it('should render PackList component without errors', () => {
    render(<PackList />);
    // If the component renders without errors, the test will pass.
  });
});
