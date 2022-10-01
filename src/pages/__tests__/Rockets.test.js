import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../RocketPage';
import store from '../../Redux/configStore';
import '@testing-library/jest-dom/extend-expect';

describe('Test the Rockets', () => {
  it('Render the rockets', () => {
    const list = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(list).toMatchSnapshot();
  });
});
