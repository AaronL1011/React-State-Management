import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const links = [
	{
		to: "/colocation",
		label: "Colocation",
	},
	{
		to: "/composition",
		label: "Composition",
	},
	{
		to: "/context",
		label: "Context",
	},
	{
		to: "/forms",
		label: "Forms",
	},
];

const Navbar = () => {
	return (
		<Flex justifyContent="center" gap={4} p={4}>
			{links.map((link) => (
				<Link key={link.to} to={link.to}>
					{link.label}
				</Link>
			))}
		</Flex>
	);
};

export default Navbar;
