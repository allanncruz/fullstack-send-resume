import styled from "styled-components";

export const Container = styled.header`
	padding: 15px 20px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const Form = styled.form`
  padding: 10px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin: 20px 0;
  color: ${props => props.theme.colors.secondary};
`


export const StyleInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 4px;
  color: ${props => props.theme.colors.black};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;
export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 4px;
  color: ${props => props.theme.colors.black};
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const StyleTextarea = styled.textarea`
  padding: 8px;
  font-size: 16px;
  height: 63px;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 4px;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const FormButton = styled.button`
  background-color: ${props => (props.theme.colors.primary)};
  color: ${props => (props.theme.colors.white)};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`;