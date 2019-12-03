import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  ${tw`h-5 bg-blue`}
`;

const HomePage = () => (
  <div>
    Welcome home!!
    <Button>COUCOU</Button>
  </div>
);

export default HomePage;
