import {combineReducers} from "redux";

import { mainPageReducer } from "../../pages/Main/reducers";

export const rootReducer = combineReducers({
	mainPage: mainPageReducer
})
