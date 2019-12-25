import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { incrementAction, decrementAction } from './actions';
import { makeSelectCounter } from './selectors';
import { Flex, Row, Button } from './styles';

function Home({ counter, increment, decrement }) {
  return (
    <Flex>
      <FormattedMessage id="nav.test" defaultMessage="HELLO" />
      <p>Vous avez compter {counter} fois.</p>
      <Row>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </Row>
    </Flex>
  );
}

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
