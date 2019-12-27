import produce from 'immer';
import { DEFAULT_LOCALE } from '~/app/i18n';
import { CHANGE_LOCALE } from './constants';

export const initialState = {
  locale: DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
const languageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        localStorage.reactiveLanguage = action.locale;
        break;
    }
  });

export default languageReducer;
