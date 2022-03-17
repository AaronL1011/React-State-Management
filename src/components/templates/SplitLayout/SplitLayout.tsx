import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import React, { FC } from "react";

interface SplitLayoutProps {
	title: string;
	leftElement: React.ReactNode;
	rightElement: React.ReactNode;
}

const SplitLayout: FC<SplitLayoutProps> = ({
	title,
	leftElement,
	rightElement,
}) => {
	return (
		<Center p={8} width="100%">
			<VStack spacing={24}>
				<Heading>{title}</Heading>
				<Flex justifyContent="center" flexWrap="wrap" gap={8} width="100%">
					<Box>{leftElement}</Box>
					<Box>{rightElement}</Box>
				</Flex>
			</VStack>
		</Center>
	);
};

export default SplitLayout;
