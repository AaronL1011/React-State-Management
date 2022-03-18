import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import OtherStuff from '../../examples/OtherStuff';

export interface NavigationProps {
  leftElement: React.ReactNode;
  rightElement: React.ReactNode;
}

const Navigation: FC<NavigationProps> = ({ leftElement, rightElement }) => {
  return (
    <Flex justifyContent='space-between' width='100%'>
      {leftElement}
      {rightElement}
    </Flex>
  );
};

export interface ContentProps {
  titleElement: React.ReactNode;
  bodyElement: React.ReactNode;
}

const Content: FC<ContentProps> = ({ titleElement, bodyElement }) => {
  return (
    <Flex flexDirection='column' gap={4}>
      <Box>{titleElement}</Box>
      <Box>{bodyElement}</Box>
    </Flex>
  );
};

const Greeting: FC<{ name: string }> = ({ name }) => {
  return (
    <Flex flexDir='column'>
      <Heading>Hello {name}</Heading>
      <Text>So glad you could make it!</Text>
    </Flex>
  );
};

const RegularApp = () => {
  const [user, setUser] = useState({
    firstName: 'Jo',
    lastName: 'Smith'
  });

  const handleLogout = () => {
    setUser({
      firstName: '',
      lastName: ''
    });
  };

  return (
    <VStack maxWidth='600px' p={8}>
      <Navigation
        leftElement={<Heading size='md'>Arbitrary Application Header</Heading>}
        rightElement={<Button onClick={handleLogout}>Logout</Button>}
      />
      <Content
        titleElement={<Greeting name={user.firstName} />}
        bodyElement={<OtherStuff />}
      />
    </VStack>
  );
};

export default RegularApp;
