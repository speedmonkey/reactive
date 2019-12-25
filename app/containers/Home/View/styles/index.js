import styled from 'styled-components';

const Flex = styled.div`
  ${tw`flex flex-col`}
`;

const Row = styled.div`
  ${tw`flex flex-row`}
`;

const Button = styled.button`
  ${tw`h-5 w-10 bg-blue text-white 
    mr-2 rounded-def`}
  font-size: 20px;
`;

export { Flex, Row, Button };
