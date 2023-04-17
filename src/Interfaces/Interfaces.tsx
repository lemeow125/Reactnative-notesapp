export interface IconProps {
  size: number;
  color: string;
}

export interface RootDrawerParamList {
  navigate: any;
}

// Redux Interfaces
export interface LoginState {
  Login: { logged_in: boolean };
}

export interface LoggedInUserState {
  LoggedInUser: {
    value: {
      email: string;
      id: number;
      username: string;
    };
  };
}

// Component Props Interfaces

export interface NoteProps {
  title: string;
  content: string;
  id: number;
  date_created: Date;
  owner: string;
  public: boolean;
}

export interface IconProps {
  size: number;
  color: string;
}

// API Interfaces

export interface RegistrationParams {
  email: string;
  username: string;
  password: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ActivationParams {
  uid: string;
  token: string;
}

export interface AddNoteParams {
  title: string;
  content: string;
  public: boolean;
}

export interface UpdateNoteParams {
  id: number;
  title: string;
  content: string;
  public: boolean;
}
