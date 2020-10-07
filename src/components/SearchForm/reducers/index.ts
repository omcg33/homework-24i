import { CHANGE } from "../actions";

const initialState = {
	search: undefined
}
type IState = {
	search?: string;
}

export const searchFormReducer = (state:IState = initialState, action) => {
	switch (action.type) {
		case CHANGE:
			return { ...state, search: action.payload};
		default:
			return state;
	}
}
