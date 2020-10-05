import {combineReducers} from "redux";

import {mainPageReducer, PAGE_KEY as MAIN_PAGE_KEY}   from "../../pages/Main/reducers";
import {moviePageReducer, PAGE_KEY as MOVIE_PAGE_KEY} from "../../pages/Movie/reducers";

export const rootReducer = combineReducers({
	[MAIN_PAGE_KEY]: mainPageReducer,
	[MOVIE_PAGE_KEY]: moviePageReducer
})
