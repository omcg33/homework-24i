import {combineReducers} from "redux";

import { mainPageReducer, PAGE_KEY as MAIN_PAGE_KEY } from "../../pages/Main/reducers";

export const rootReducer = combineReducers({
	[MAIN_PAGE_KEY]: mainPageReducer
})
