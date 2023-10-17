import { render, screen } from '@testing-library/react';
import Content from '../components/Content';

test('renders Content component with initial state', () => {
  render(<Content />);

  const headerText = screen.getByText('Dog API');
  const generateButton = screen.getByText('Click on the button below to generate a random dog image.');
  const imageBox = screen.getByRole('img');

  expect(headerText).toBeInTheDocument();
  expect(generateButton).toBeInTheDocument();
  expect(imageBox).toBeInTheDocument();
});
