import styled from 'styled-components';

export const BtnSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  margin-left: 20px;
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  margin-left: 15px;
`;
export const StyledButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
export const StatsTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-left: 15px;
`;
