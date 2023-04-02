import styled from 'styled-components';
import { font, widthHeight } from '../style/mixins';

export const Container = styled.div`
margin: 50px auto;
padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  background-color: rgba(146, 178, 168, 0.5);
  box-shadow: 0px 0px 8px 0px #33333347;
`;

export const TitlePhoneBook = styled.h1`
  font-family: ${props => props.theme.fonts.secondary};
  ${widthHeight(240)};
  ${font({ fs: 28, fw: 600, lh: 32 })};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;

export const TitleContacts = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  ${widthHeight(240)};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: 10px;
  margin-top: 30px;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;
