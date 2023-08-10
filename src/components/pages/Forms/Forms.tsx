import { Code, Text, VStack } from "@chakra-ui/react";
import HookForm from "../../forms/HookForm";
import StatefulForm from "../../forms/StatefulForm";
import SplitLayout from "../../templates/SplitLayout";

const Form = () => {
	return (
    <SplitLayout
      title='Forms'
      leftElement={
        <VStack spacing={4} maxWidth='600px'>
          <Text>
            Here we have a form with a few inputs, and some simulated expensive
            components (invisible). The penalty component here has been slowed
            down to simulate an expensive computation performed on render, an
            exaggerated example but this can be a real thing for users on
            lower-spec devices. Try some speed-typing into the fields below and
            see what happens!
          </Text>
          <StatefulForm />
        </VStack>
      }
      rightElement={
        <VStack spacing={4} maxWidth='600px'>
          <Text>
            Yikes, that hurt! A few things are happening here. Firstly, notice
            that all of our inputs re-render on any change of value, even if
            they arent using the value that is being updated. Second, expensive
            renders are blocking our main thread and bogging down our whole user
            experience, nasty! Now try the next form and see the effects of
            using appropriate tooling and attaching expensive computations to
            the <Code>onBlur</Code> handler, rather than our{' '}
            <Code>onChange</Code>. Much better!
          </Text>
          <HookForm />
        </VStack>
      }
    />
  );
};

export default Form;
