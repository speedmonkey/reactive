import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  incrementAction,
  decrementAction,
} from 'actions/homeActions';
import HomeView from './View';

const mapStateToProps = state => ({
  counter: state.home.counter,
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
