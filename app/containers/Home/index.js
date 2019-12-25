import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  incrementAction,
  decrementAction,
} from './actions';
import { counterSelector } from './selectors';
import HomeView from './View';

const mapStateToProps = state => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomeView);
