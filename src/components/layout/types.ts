export interface IDashboardProps {
  token: string | null;
  populateProducts: (token: string) => void;
}

export interface ILoggedInLinkProps {
  logout: () => void;
}

export interface INavbarProps {
  token: string | null;
}
