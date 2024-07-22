export interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  light?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  index?: number
}

export interface Resume {
  id: number;
  name: string;
  email: string;
  phone: string;
  desired_position: string;
  education: string;
  comments: string;
  resume_file: string;
  submitted_at: string;
}

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  desiredPosition: string;
  education: string;
  comments: string;
  resumeFile: FileList;
}
