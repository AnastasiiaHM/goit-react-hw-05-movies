import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li`
  flex-basis: 150px;
`;
export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 4px;
  max-width: 200px;
`;

export const Name = styled.h3`
  margin-bottom: 5px;
  font-weight: 500;
  color: #e6990a;
  text-align: center;
`;

export const Character = styled.h3`
  color: #fad65f;
  text-align: center;
`;
