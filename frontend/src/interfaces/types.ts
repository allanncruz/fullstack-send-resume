export interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  light?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  index?: number
}