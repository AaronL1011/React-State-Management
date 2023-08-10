import { FC } from 'react';
import { Center, Code, Heading, Text, VStack } from '@chakra-ui/react';

const Landing: FC = () => {
  return (
    <Center p={8} width='100%'>
      <VStack spacing={4}>
        <Heading>Welcome! 👋</Heading>
        <Text maxWidth='761px'>
          This interactive crash-course for React State Management aims to cover
          some concepts around component composition and help visualise its
          effect on state management and application performance.
        </Text>
        <Text maxWidth='761px'>
          I recommend running this app in development mode with the React
          Devtools Profiler turned on (enable highlights on re-render) to see
          the impacts visualised.
        </Text>
        <Text maxWidth='761px'>
          Use the links above to navigate to different concepts. The
          accompanying write-up for this can be found in the{' '}
          <Code>README.md</Code> of this project. Enjoy!
        </Text>
      </VStack>
    </Center>
  );
};

export default Landing;
