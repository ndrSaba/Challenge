import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar';

test('renders ProgressBar component', () => {
  const { container } = render(<ProgressBar />);
  const progressBar = container.querySelector('.progress-bar');
  const progressBarFill = container.querySelector('.progress-bar-fill');

  expect(progressBar).toBeInTheDocument();
  expect(progressBarFill).toBeInTheDocument();
});