import { RouteObject, useRoutes } from "react-router-dom";
import Colocation from "../components/pages/Colocation";
import Composition from "../components/pages/Composition";
import Context from "../components/pages/Context";
import Forms from "../components/pages/Forms";

export const routes: RouteObject[] = [
	{
		path: "/colocation",
		element: <Colocation />,
	},
	{
		path: "/composition",
		element: <Composition />,
	},
	{
		path: "/context",
		element: <Context />,
	},
	{
		path: "/forms",
		element: <Forms />,
	},
];

const Routes: React.FC = () => {
	const elements = useRoutes(routes);
	return elements;
};

export default Routes;
