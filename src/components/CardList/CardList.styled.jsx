import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  min-height: 390px;
  border-radius: 2px;
  overflow: hidden;
  background-color: #363333;
  border: none;
  box-shadow: 1px 2px 2px rgba(218, 247, 150, 0.5),
    0px 8px 10px rgba(237, 245, 130, 0.5), 2px 6px 8px rgba(244, 247, 79, 0.6);
  :hover {
    border: 1px solid #f7fa47dd;
  }
`;

export const FilmName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  transition: all 200ms ease-in-out;
`;

export const Links = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f2fa81e8;
  height: 100%;
`;
export const Image = styled.img`
  margin-bottom: 5px;
`;
