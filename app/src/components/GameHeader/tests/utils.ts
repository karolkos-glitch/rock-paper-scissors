import {screen} from '@testing-library/react';

export const getHeaderElements = () => {
  screen.getByAltText('Rock Paper Scissors')
  screen.getByText('SCORE');
}