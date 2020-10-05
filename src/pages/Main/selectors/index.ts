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

export const getPopularMovies = createSelector(
	(state: IState) => getData(state)?.popularMovies,
	(popularMovies: any[] | undefined) => popularMovies
);

export const getPopularTvSeries = createSelector(
	(state: IState) => getData(state)?.popularTvSeries,
	(popularTvSeries: any[] | undefined) => popularTvSeries
);

export const getFamilyMovies = createSelector(
	(state: IState) => getData(state)?.familyMovies,
	(familyMovies: any[] | undefined) => familyMovies
);

export const getDocumentaryMovies = createSelector(
	(state: IState) => getData(state)?.documentaryMovies,
	(documentaryMovies: any[] | undefined) => documentaryMovies
);

