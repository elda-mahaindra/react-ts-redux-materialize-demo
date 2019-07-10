export interface ILoggedInLinkProps {
  logout: () => void;
}

export interface INavbarProps {
  token: string | null;
}
