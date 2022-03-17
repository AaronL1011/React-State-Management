import React, {
	createContext,
	FC,
	useContext,
	useMemo,
	useReducer,
} from "react";

export interface DemoStore {
	count: number;
}
export type Action = { type: "incrementCount" };

export interface DemoContext {
	state: DemoStore;
	dispatch: React.Dispatch<Action>;
}

const DemoContext = createContext<DemoContext | undefined>(undefined);

const contextReducer = (state: DemoStore, action: Action) => {
	switch (action.type) {
		case "incrementCount":
			return {
				...state,
				count: state.count + 1,
			};
		default:
			return state;
	}
};

const initialState = {
	count: 0,
};

export const DemoContextProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(contextReducer, initialState);

	const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

export const useDemoStore = () => {
	const context = useContext(DemoContext);

	if (!context) {
		throw new Error("useDemoStore not within a DemoContextProvider.");
	}

	return context;
};
