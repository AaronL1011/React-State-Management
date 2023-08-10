import { Box, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';

interface SplitLayoutProps {
  title: string;
  description?: string;
  leftElement: React.ReactNode;
  rightElement: React.ReactNode;
}

const SplitLayout: FC<SplitLayoutProps> = ({
  title,
  description,
  leftElement,
  rightElement
}) => {
  return (
    <Center p={8} width='100%'>
      <VStack spacing={24}>
        <VStack spacing={4}>
          <Heading>{title}</Heading>
          {description && <Text>{description}</Text>}
        </VStack>
        <Flex justifyContent='center' flexWrap='wrap' gap={8} width='100%'>
          <Box>{leftElement}</Box>
          <Box>{rightElement}</Box>
        </Flex>
      </VStack>
    </Center>
  );
};

export default SplitLayout;
