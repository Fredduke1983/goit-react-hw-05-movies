import styled from 'styled-components';

const ToHomeStyle = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  p {
    margin-left: 10px;
  }
  &:hover {
    color: blue;
  }
`;

const DetailStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    margin-right: 20px;
    margin-left: 20px;
  }
`;
export { DetailStyle, ToHomeStyle };
