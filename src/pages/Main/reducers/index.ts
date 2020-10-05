import {ADD, UNMOUNT} from "../actions";

const initialState = {};

export const PAGE_KEY = "mainPage";

export const mainPageReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD:
			return payload;
		case UNMOUNT:
			return initialState;
		default:
			return state;
	}
}
