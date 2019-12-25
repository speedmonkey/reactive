import produce from 'immer';
import { INCREMENT, DECREMENT } from './constants';

export const initialState = {
  counter: 0,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.counter += 1;
        break;

      case DECREMENT:
        if (draft.counter !== 0) draft.counter -= 1;
        break;
    }
  });

export default homeReducer;
