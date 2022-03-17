import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../../molecules/Navbar";

export interface NavLayoutProps {
	content: React.ReactNode;
}

const NavLayout: FC<NavLayoutProps> = ({ content }) => {
	return (
		<Flex flexDir="column" height="100vh">
			<Navbar />
			<Flex flexGrow={1}>{content}</Flex>
		</Flex>
	);
};

export default NavLayout;
