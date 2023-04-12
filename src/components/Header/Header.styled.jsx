import styled from 'styled-components';

const Header = styled.header`
  height: 50px;
  box-shadow: 1px 5px 5px grey;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
const HeaderNav = styled.nav`
  a {
    margin-right: 20px;
    text-decoration: none;
    &.active {
      font-weight: 800;
    }
    &:hover {
      color: #1b21fb;
    }
  }
`;

export { Header, HeaderNav };
