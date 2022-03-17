import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { expensiveValidation, ExpensiveComponent } from "../util";

const StatefulForm = () => {
	const [formValue, setFormValue] = useState({
		name: {
			value: "",
			error: "",
		},
		email: {
			value: "",
			error: "",
		},
		"fav-animal": {
			value: "",
			error: "",
		},
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormValue((prev) => ({
			...prev,
			[e.target.name]: {
				value: e.target.value,
				error: expensiveValidation(e.target.value),
			},
		}));
	};

	const onSubmit = () => console.log(formValue);

	return (
		<VStack width="400px" spacing={4}>
			<ExpensiveComponent />
			<FormControl isInvalid={!!formValue.name.error}>
				<FormLabel htmlFor="name">Name</FormLabel>
				<Input
					id="name"
					name="name"
					value={formValue.name.value}
					onChange={handleChange}
				/>
				{!!formValue.name.error && (
					<FormErrorMessage>{formValue.name.error}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl isInvalid={!!formValue.email.error}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input
					id="email"
					name="email"
					value={formValue.email.value}
					onChange={handleChange}
				/>
				{!!formValue.email.error && (
					<FormErrorMessage>{formValue.email.error}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl isInvalid={!!formValue["fav-animal"].error}>
				<FormLabel htmlFor="fav-animal">Favourite animal</FormLabel>
				<Input
					id="fav-animal"
					name="fav-animal"
					value={formValue["fav-animal"].value}
					onChange={handleChange}
				/>
				{!!formValue["fav-animal"].error && (
					<FormErrorMessage>{formValue["fav-animal"].error}</FormErrorMessage>
				)}
			</FormControl>
			<Button type="submit" onClick={onSubmit}>
				Submit
			</Button>
		</VStack>
	);
};

export default StatefulForm;
