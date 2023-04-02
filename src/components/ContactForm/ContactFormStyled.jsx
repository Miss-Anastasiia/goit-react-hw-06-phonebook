import styled from 'styled-components';
import { Form, Field } from 'formik';
import { font } from 'style/mixins';


export const MainForm = styled(Form)`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 50px;
  background-color: ${props => props.theme.colors.greyBg};;
  box-shadow: 0px 0px 8px 0px #33333347;
`;

export const Input = styled(Field)`
  color: #333;
  font-size: 20px;
  padding: 10px;
  border-radius: 0.1rem;
  border: none;
  border-radius: 5px;
  display: block;
   box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;


  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const FormLabel = styled.label`
  ${font({ fs: 16, fw: 700, lh: 20 })};
  display: block;
  margin-bottom: 10px;
  margin-top:10px
`;

export const AddButton = styled.button`
   font-size: 20px;
   font-weight: 800;
   margin-top: 30px;
   padding: 15px;
   cursor: pointer;
   border-radius: 5px;
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: ${props => props.theme.colors.colorBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
        transform: scale(1.1);
      background-color: rgba(201, 88, 80, 0.589);
  }
`;
