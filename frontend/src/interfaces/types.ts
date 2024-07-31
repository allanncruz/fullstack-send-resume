export interface IButton {
  primary?: boolean;
  secondary?: boolean;
  light?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  index?: number
}

export interface IResumes {
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

export interface ITableList {
  body: IResumes[];
  header: Array<String>;
}