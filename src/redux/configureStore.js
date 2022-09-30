import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';

const reducer = combineReducers({
  dragons: dragonsReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;
