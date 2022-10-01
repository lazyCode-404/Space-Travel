import React from 'react';
import renderer from 'react-test-renderer';
import Missions from '../pages/Missions';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';

it ("Missions component", () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <Missions />
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})