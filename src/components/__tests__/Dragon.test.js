import React from 'react';
import renderer from 'react-test-renderer';
import Dragons from '../pages/dragons/Dragons';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';

it ("Missions component", () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <Dragons />
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})