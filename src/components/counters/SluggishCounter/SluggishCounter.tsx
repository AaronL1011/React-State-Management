import { Button } from "@chakra-ui/react";
import { FC } from "react";

export interface SluggishCounterProps {
	count: number;
	onCount: () => void;
}

const SluggishCounter: FC<SluggishCounterProps> = ({ count, onCount }) => {
	return <Button onClick={onCount}>Count is {count}</Button>;
};

export default SluggishCounter;
