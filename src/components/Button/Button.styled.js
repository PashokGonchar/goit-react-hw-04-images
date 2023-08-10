import styled from '@emotion/styled';

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 200px;
  font-size: 30px;
  border-radius: 20px;
  cursor: pointer;
  background-color: green;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
