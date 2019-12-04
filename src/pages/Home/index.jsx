import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Button = styled.button`
  ${tw`h-5 bg-blue`}
`;

const HomePage = () => (
  <div>
    <FormattedMessage
      id="nav.test"
      defaultMessage="HELLO"
    />
    <Button>COUCOU</Button>
  </div>
);

export default HomePage;
