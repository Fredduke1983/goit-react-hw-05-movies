import styled from 'styled-components';
const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
`;
const CastListItem = styled.li`
  width: 100px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  img {
    display: block;
    height: 150px;
    border-radius: 3px;
  }
  h4 {
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
  }
`;
export { CastListItem, CastList };
