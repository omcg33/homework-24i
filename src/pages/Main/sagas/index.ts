import axios                    from "axios"
import {all, call, select, put} from "redux-saga/effects";

import {TMDB_API_KEY} from "../../../app/consts";

import {add}        from "../actions";
import {getHasData} from "../selectors";

export function* initSaga() {
	yield call(getPageData);
}

export function* getPageData() {
	const hasData = yield select(getHasData);

	if (!hasData) {
		try {
			const [ popularMovies, popularTv, familyMovies, documentaryMovies ] = yield all([
				call(axios.get, 'https://api.themoviedb.org/3/movie/popular', { params: {
						api_key: TMDB_API_KEY,
						language: "en-US",
						page: 1
					}}),
				call(axios.get, 'https://api.themoviedb.org/3/tv/popular', { params: {
						api_key: TMDB_API_KEY,
						language: "en-US",
						page: 1
					}}),
				call(axios.get, 'https://api.themoviedb.org/3/discover/movie', { params: {
						api_key: TMDB_API_KEY,
						with_genres: 10751
					}}),
				call(axios.get, 'https://api.themoviedb.org/3/discover/movie', { params: {
						api_key: TMDB_API_KEY,
						with_genres: 99
					}}),
			]);

			yield put(add({
				popularMovies: popularMovies.data.results,
				popularTv: popularTv.data.results,
				familyMovies: familyMovies.data.results,
				documentaryMovies: documentaryMovies.data.results,
			}));
		} catch (e) {
			console.error(e);
		}
	}
	//
	// yield put(replaceReducer(PAGE_KEY, pageReducer));
}
