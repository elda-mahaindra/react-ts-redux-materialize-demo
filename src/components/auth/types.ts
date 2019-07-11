export interface ILoginProps {
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => void;
}

export interface IRegisterProps {
  token: string | null;
  loading: boolean;
  error: string | null;
  register: (email: string, password: string) => void;
}
