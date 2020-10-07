import {createSelector} from "reselect";

import {PAGE_KEY} from "../reducers";

import {IState} from "./interfaces";

export const getData = createSelector(
	(state: IState) => state[PAGE_KEY],
	(data: any) => data,
);

export const getHasData = createSelector(
	(state: IState) => !!getData(state) && Object.keys(getData(state)).length !== 0,
	(hasData: boolean) => hasData,
);

export const getSearchForm = createSelector(
	(state: IState) => getData(state)?.searchForm,
	(searchForm: Object | undefined) => searchForm
);

export const getResults = createSelector(
	(state: IState) => getData(state)?.results,
	(results: any | undefined) => results
);



