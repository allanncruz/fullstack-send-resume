import styled from 'styled-components';
import { ButtonProps } from '../../interfaces/types';

export const getBackgroundColor = (props: any) => {
  if (props.primary) {
    return props.theme.colors.primary;
  } else if (props.light) {
    return props.theme.colors.white;
  } else if (props.secondary) {
    return props.theme.colors.secondary;
  }
  return 'defaultColor';
};

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => (props.primary ? '#fff' : props.theme.colors.primary)};
  padding: 0.55em 1.2em;
  margin-right: 5px;
  border-radius: 3px;
  border: solid 1px ${props => (props.theme.colors.primary)};
  cursor: pointer;
    &:hover {
      opacity: .8;
    }

    &.btn{
      &-remove{
        display: none;
      }
      &-active{
        display: inline;
      }
    }

    &.btn-delet{
      display: none;
      &.active{
        display: block;
      }
      &-remove{
        display: none;
      }
    }
`;