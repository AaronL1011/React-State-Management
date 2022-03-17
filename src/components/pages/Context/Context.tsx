import { Code, Text, VStack } from "@chakra-ui/react";
import ConnectedCounter from "../../counters/ConnectedCounter";
import SplitLayout from "../../templates/SplitLayout";
import { DemoContextProvider } from "./store";

const Context = () => {
	return (
		<DemoContextProvider>
			<SplitLayout
				title="Context API"
				leftElement={
					<VStack spacing={4} maxWidth="600px">
						<Text>
							Here we have a counter component that is connected to our store
							via a <Code>Context.Provider</Code> and a <Code>useContext</Code>{" "}
							hook. Notice how when we click this button, the other button also
							updates, this is because they are two connected components looking
							at the same store! Notice now with our re-renders that a change in
							our <Code>count</Code> triggers a re-render of the root of our
							&quot;App&quot;, while the static elements dont re-render.
						</Text>
						<ConnectedCounter />
					</VStack>
				}
				rightElement={
					<VStack spacing={4} maxWidth="600px">
						<Text>
							This is certainly a step up from our <Code>Colocation</Code>{" "}
							example, but comes with its own considerations. Context API is
							mainly meant to hold state that changes infrequently, such as
							themes, authenticated user objects, language settings, endpoint
							lookups and other values that would require the app to re-render
							anyway. If you&apos;re in a case where you need Context for a
							frequently changing value, consider how low you can push your
							Context Provider in your component tree while still making sense
							in your app structure.
						</Text>
						<ConnectedCounter />
					</VStack>
				}
			/>
		</DemoContextProvider>
	);
};

export default Context;
