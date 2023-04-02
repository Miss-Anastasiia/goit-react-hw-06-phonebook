import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DelButton = styled.button`
 font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  margin-left: 20px;
  border: none;
  box-shadow: 0 0 2px #333;
  cursor: pointer;
  background-color: rgba(22, 110, 51, 0.742);
  border-radius: 5px;
  transition-duration: 400ms;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
      transform: scale(1.1);
      background-color: rgba(201, 88, 80, 0.589);
  }
`;