import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Rockets from '../pages/Rockect';
import store from '../../redux/configureStore';

it('Rockets component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
