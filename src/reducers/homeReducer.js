import {
  INCREMENT,
  DECREMENT,
} from 'constants/homeConstants';

const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT: {
      if (state.counter !== 0) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
