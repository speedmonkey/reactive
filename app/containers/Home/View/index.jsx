import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Flex, Row, Button } from './styles';

const HomeView = ({ counter, increment, decrement }) => (
  <Flex>
    <FormattedMessage
      id="nav.test"
      defaultMessage="HELLO"
    />
    <p>Vous avez compter {counter} fois.</p>
    <Row>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Row>
  </Flex>
);

HomeView.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default HomeView;
