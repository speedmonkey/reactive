import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import messages from './messages';
import { incrementAction, decrementAction } from './actions';
import { makeSelectCounter } from './selectors';
import { Flex, Row, Button } from './styles';

const Home = ({ counter, increment, decrement }) => (
  <Flex>
    <p>
      <FormattedMessage {...messages.startProject} />
    </p>
    <p>Vous avez compter {counter} fois.</p>
    <Row>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Row>
  </Flex>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
