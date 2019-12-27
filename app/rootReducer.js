import { combineReducers } from 'redux';
import languageReducer from 'containers/Language/reducer';
import homeReducer from 'containers/Home/reducer';

export default combineReducers({
  language: languageReducer,
  home: homeReducer,
});
