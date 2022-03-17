import { Code, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ColocatedCounter from "../../counters/ColocatedCounter";
import SluggishCounter from "../../counters/SluggishCounter";
import SplitLayout from "../../templates/SplitLayout";

const Colocation = () => {
	const [count, setCount] = useState(1);

	const handleCount = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<SplitLayout
			title="State Colocation"
			leftElement={
				<VStack spacing={4} maxWidth="600px">
					<Text>
						Here we have a counter component that is not utlizing appropriate
						state colocation. Enable your react profiler and turn on highlights
						for re-renders. Notice how all the components re-render on clicking
						the counter button? Now try the other component!
					</Text>
					<SluggishCounter count={count} onCount={handleCount} />
				</VStack>
			}
			rightElement={
				<VStack spacing={4} maxWidth="600px">
					<Text>
						Notice now that the button you click is the only component on the
						page re-rendering. This is due to the fact that the only trigger
						condition for a render (in this case, a changing{" "}
						<Code>useState</Code> value) is contained within the single
						component that cares about it.
					</Text>
					<ColocatedCounter />
				</VStack>
			}
		/>
	);
};

export default Colocation;
