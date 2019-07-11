export interface IRegisterProps {
  token: string | null;
  loading: boolean;
  error: string | null;
  register: (email: string, password: string) => void;
}
