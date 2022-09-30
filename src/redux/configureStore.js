import { configureStore } from '@reduxjs/toolkit';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import missionsReducer from './missions/missions';
import rockectReducer from './rockets/RockectReducer';
import dragonsReducer from './dragons/dragons';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockects: rockectReducer,
    dragons: dragonsReducer,
  },
});

export default store;
