import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';
import rockectReducer from './rockets/RockectReducer';
import dragonsReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockects: rockectReducer,
    dragons: dragonsReducer,
  },
});

export default store;
