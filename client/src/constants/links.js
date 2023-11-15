import * as ROUTES from './routes';

const PUBLIC_LINKS = [
  {
    path: ROUTES.LANDING,
    text: 'Home',
  },
  {
    path: ROUTES.SIGN_UP,
    text: 'Sign Up',
  },
  {
    path: ROUTES.LOG_IN,
    text: 'Log In',
  },
];

const ADMIN_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home',
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies',
  },
  {
    path: ROUTES.USER,
    text: 'Users',
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs',
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile',
  },
];

const COMPANY_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home',
  },
  {
    path: ROUTES.USERS,
    text: 'Users',
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs',
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile',
  },
];

const USER_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home',
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies',
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs',
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile',
  },
];

export { PUBLIC_LINKS, ADMIN_LINKS, COMPANY_LINKS, USER_LINKS };
