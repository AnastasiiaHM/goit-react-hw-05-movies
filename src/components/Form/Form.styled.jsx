import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
export const Forms = styled.form`
  border: 1px solid black;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #695757;
  border-radius: 3px;
  overflow: hidden;
  margin-left: 140px;
`;
export const IconB = styled(BiSearchAlt)`
  width: 25px;
  height: 25px;
  fill: #a7a2a2;
`;
export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #313030;
  :hover {
    background-color: #252121;
  }
`;

export const SearchFormlabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  ::placeholder {
    font: inherit;
    font-size: 18px;
    color: #ddd8d8;
  }
`;
export const ListMovie = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  min-height: 390px;
  border-radius: 2px;
  overflow: hidden;
  background-color: transparent;
`;
export const Items = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f2fa81e8;
  height: 100%;
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
