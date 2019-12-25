import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectCounter = () =>
  createSelector(selectHome, homeState => homeState.counter);

export { selectHome, makeSelectCounter };
