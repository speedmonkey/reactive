import styled from 'styled-components';

const Wrapper = styled.div`
  ${tw`shadow-header flex bg-white justify-center`}
`;

const Navbar = styled.div`
  ${tw`flex p-1 items-center w-full
    justify-between`};
  max-width: 1080px;
`;

const Title = styled.h1`
  ${tw`font-normal m-0 text-blue`}
  font-size: 3rem;
`;

const LanguageWrapper = styled.div`
  ${tw`margin-left flex`}
  > img {
    margin-right: 1rem;
  }
`;

const Flag = styled.img`
  height: 3rem;
`;

export { Wrapper, Navbar, Title, LanguageWrapper, Flag };
