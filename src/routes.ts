const protocol = 'http:/';
const path = 'localhost:3001';

const routes = {
  signInRoute: (): string => [protocol, path, 'sign_in'].join('/'),
  signUpRoute: (): string => [protocol, path, 'sign_up'].join('/'),
  usersRoute: (): string => [protocol, path, 'users'].join('/')
}

export default routes;