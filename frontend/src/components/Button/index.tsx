  import { IButton } from '../../interfaces/types';
import { StyledButton } from './style';

export const Button = ({ 
  children, 
  primary, 
  secondary, 
  light, 
  onClick, 
  className, 
  index }: IButton) => {
  return (
    <StyledButton 
      data-cy={`button-${index}`} 
      secondary={secondary} 
      primary={primary}
      light={light} 
      onClick={onClick} 
      className={className}
      >
        {children}
    </StyledButton>
  );
};