import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	VStack,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { expensiveValidation, ExpensiveComponent } from "../util";

export interface FormValues {
	name: string;
	email: string;
	"fav-animal": string;
}

const HookForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (values: FormValues) => console.log(values);

	const handleValidation = (e: ChangeEvent<HTMLInputElement>) => {
		const error = expensiveValidation(e.target.value);
		setError(e.target.name as keyof FormValues, {
			message: error,
		});
	};

	return (
		<VStack width="400px" spacing={4}>
			<ExpensiveComponent />
			<FormControl isInvalid={!!errors.name}>
				<FormLabel htmlFor="name">Name</FormLabel>
				<Input {...register("name")} onBlur={handleValidation} />
				{!!errors.name && (
					<FormErrorMessage>{errors.name.message}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl isInvalid={!!errors.email}>
				<FormLabel htmlFor="email">Email</FormLabel>
				<Input {...register("email")} onBlur={handleValidation} />
				{!!errors.email && (
					<FormErrorMessage>{errors.email.message}</FormErrorMessage>
				)}
			</FormControl>
			<FormControl isInvalid={!!errors["fav-animal"]}>
				<FormLabel htmlFor="fav-animal">Favourite animal</FormLabel>
				<Input {...register("fav-animal")} onBlur={handleValidation} />
				{!!errors["fav-animal"] && (
					<FormErrorMessage>{errors["fav-animal"].message}</FormErrorMessage>
				)}
			</FormControl>
			<Button type="submit" onClick={handleSubmit(onSubmit)}>
				Submit
			</Button>
		</VStack>
	);
};

export default HookForm;
