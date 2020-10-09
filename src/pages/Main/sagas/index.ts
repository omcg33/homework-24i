import {all, call, select, put} from "redux-saga/effects";

import {tmdb}       from "../../../helpers/api";
import history      from "../../../helpers/history";

import {add}        from "../actions";
import {getHasData} from "../selectors";

export function* initSaga() {
	yield call(getPageData);
}

export function* getPageData() {
	const hasData = yield select(getHasData);

	if (!hasData) {
		try {
			const [ popularMovies, popularTvSeries, familyMovies, documentaryMovies ] = yield all([
				call(tmdb.getPopularMovies, {
					language: "en-US",
					page: 1
				}),
				call(tmdb.getPopularTvSeries, {
					language: "en-US",
					page: 1
				}),
				call(tmdb.getMovieDiscover, {
					with_genres: "10751"
				}),
				call(tmdb.getMovieDiscover, {
					with_genres: "99"
				}),
			]);

			yield put(add({
				popularMovies: popularMovies.results,
				popularTvSeries: popularTvSeries.results,
				familyMovies: familyMovies.results,
				documentaryMovies: documentaryMovies.results,
			}));
		} catch (e) {
			console.error(e);
			const errorStatusCode = e.response?.status || 500;

			if (!!errorStatusCode && errorStatusCode > 400)
				yield call(() => {
						const location = history.location;
						history.replace(location.pathname, {
							...location.state,
							errorStatusCode
						});
					}
				);
		}
	}
}
