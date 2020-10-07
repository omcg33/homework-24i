import {combineReducers} from "redux";

import {mainPageReducer, PAGE_KEY as MAIN_PAGE_KEY}   from "../../pages/Main/reducers";
import {moviePageReducer, PAGE_KEY as MOVIE_PAGE_KEY} from "../../pages/Movie/reducers";
import {tvSeriesPageReducer, PAGE_KEY as TVSHOW_PAGE_KEY} from "../../pages/TvShow/reducers";
import {searchPageReducer, PAGE_KEY as SEARCH_PAGE_KEY} from "../../pages/Search/reducers";

export const rootReducer = combineReducers({
	[MAIN_PAGE_KEY]: mainPageReducer,
	[SEARCH_PAGE_KEY]: searchPageReducer,
	[MOVIE_PAGE_KEY]: moviePageReducer,
	[TVSHOW_PAGE_KEY]: tvSeriesPageReducer,
})
