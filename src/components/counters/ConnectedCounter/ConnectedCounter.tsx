import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useDemoStore } from "../../pages/Context/store";

const ConnectedCounter: FC = () => {
	const { state, dispatch } = useDemoStore();

	const handleCount = () => {
		dispatch({ type: "incrementCount" });
	};

	return <Button onClick={handleCount}>Count is {state.count}</Button>;
};

export default ConnectedCounter;
