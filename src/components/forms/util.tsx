const PENALTY = 600000;

export const expensiveValidation = (string: string) => {
	for (let index = 2; index < PENALTY; index++) {
		currentPenaltyValue = currentPenaltyValue ** index;
	}
	return string.length > 10 ? "Length cannot be greater than 10!" : "";
};

let currentPenaltyValue = 2;
export function ExpensiveComponent() {
	for (let index = 2; index < PENALTY; index++) {
		currentPenaltyValue = currentPenaltyValue ** index;
	}
	return null;
}
