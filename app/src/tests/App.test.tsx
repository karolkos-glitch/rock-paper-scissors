import {getHeaderElements} from '@rps/components/GameHeader/tests/utils';
import {getStarterPlaygroundComponents} from '@rps/components/Playground/tests/utils';
import {render} from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('should render the header and the playground', () => {
    render(<App />);

    getHeaderElements();
    getStarterPlaygroundComponents();
  });
})