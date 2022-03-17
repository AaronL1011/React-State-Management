import { Button } from "@chakra-ui/react";
import { FC, useState } from "react";

const ColocatedCounter: FC = () => {
	const [count, setCount] = useState(1);

	const handleCount = () => {
		setCount((prev) => prev + 1);
	};

	return <Button onClick={handleCount}>Count is {count}</Button>;
};

export default ColocatedCounter;
