import styled from 'styled-components';

const MoviesFormStyle = styled.form`
  margin: 20px;
`;
const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  li {
    display: grid;
    align-content: space-between;
    justify-content: center;
    border-radius: 5px;

    box-shadow: grey 2px 2px 2px;
    width: 200px;
    height: 370px;

    list-style: none;
  }
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  p {
    text-align: center;
    padding: 10px;
  }
`;
export { MoviesFormStyle, MoviesList };
