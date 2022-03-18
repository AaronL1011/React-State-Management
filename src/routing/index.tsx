import { RouteObject, useRoutes } from "react-router-dom";
import loadable from '@loadable/component';

const Landing = loadable(() => import('../components/pages/Landing'));
const Colocation = loadable(() => import('../components/pages/Colocation'));
const Composition = loadable(() => import('../components/pages/Composition'));
const Context = loadable(() => import('../components/pages/Context'));
const Forms = loadable(() => import('../components/pages/Forms'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/colocation',
    element: <Colocation />
  },
  {
    path: '/composition',
    element: <Composition />
  },
  {
    path: '/context',
    element: <Context />
  },
  {
    path: '/forms',
    element: <Forms />
  }
];

const Routes: React.FC = () => {
	const elements = useRoutes(routes);
	return elements;
};

export default Routes;
