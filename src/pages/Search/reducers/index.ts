import {ADD, SET_RESULTS, UNMOUNT} from "../actions";

import {CHANGE, searchFormReducer} from "../../../components/SearchForm";

const initialState = {
	searchForm: {},
	results: null
};

export const PAGE_KEY = "searchPage";

export const searchPageReducer = (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case ADD:
			return payload;
		case UNMOUNT:
			return initialState;
		// I can use combineReducers here only with dynamic reducers
		case CHANGE:
			return {...state, searchForm: searchFormReducer(state.searchForm, action)}
		case SET_RESULTS:
			return {...state, results: action.payload};
		default:
			return state;
	}
}
