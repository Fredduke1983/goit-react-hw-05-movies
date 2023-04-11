import styled from 'styled-components';

const Header = styled.header`
  margin-left: 50px;
`;
const HeaderNav = styled.nav`
  a {
    margin-right: 20px;
    &.active {
      font-weight: 800;
    }
  }
`;

export { Header, HeaderNav };
