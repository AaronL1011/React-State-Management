import { Center, Code, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Landing = () => {
  return (
    <Center p={8} width='100%'>
      <VStack spacing={4}>
        <Heading>
          <span style={{ marginRight: '0.5em' }}>📦</span>Best Practices in
          React State Management
        </Heading>
        <Text maxWidth='761px'>
          Welcome to the interactive crash-course for React State Management!
          This aims to cover some advanced concepts around component composition
          and help visualise its effect on state management and application
          performance.
        </Text>
        <Text maxWidth='761px'>
          Use the navigation above to navigate through the different concepts.
          The accompanying write-up for this can be found in the{' '}
          <Code>README.md</Code> of this project. Enjoy!
        </Text>
      </VStack>
    </Center>
  );
};

export default Landing;
