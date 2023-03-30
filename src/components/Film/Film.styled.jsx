import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border: 1px solid #d5fd68;
  background-color: #383838;
  border-radius: 4px;
  text-decoration: none;
  color: #f1fc91;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover,
  :focus {
    color: #fca028;
    background-color: #535151;
  }
`;

export const LinkCastRevie = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 16px;
  border-bottom: 1px solid #d5fd68;
  font-size: 18px;
  text-decoration: none;
  color: #f1fc91;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const Img = styled.img`
  border-radius: 4px;
  display: block;
  height: auto;
  max-width: 280px;
  box-shadow: 1px 2px 2px rgba(218, 247, 150, 0.5),
    0px 8px 10px rgba(237, 245, 130, 0.5), 2px 6px 8px rgba(244, 247, 79, 0.6);
`;

export const Title = styled.h2`
  margin-bottom: 45px;
  font-weight: 700;
  font-size: 36px;
  color: #e8fa84;
  box-shadow: 1px 2px 2px rgba(218, 247, 150, 0.5),
    0px 8px 10px rgba(237, 245, 130, 0.5), 2px 6px 8px rgba(244, 247, 79, 0.6);
`;

export const Description = styled.h3`
  /* margin-bottom: 10px; */
  font-size: 22px;
  font-weight: 600;

  color: #e6990a;
`;

export const Text = styled.p`
  font-weight: 400;

  color: #fad65f;
  font-size: 20px;
`;
