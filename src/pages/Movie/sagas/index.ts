import {all, call, select, put} from "redux-saga/effects";

import {tmdb}       from "../../../helpers/api";

import {add}        from "../actions";
import {getHasData} from "../selectors";

type IGetPageDataParams = {
	id: number;
}

export function* initSaga(params) {
	yield call(getPageData, params);
}

export function* getPageData(params: IGetPageDataParams) {
	const hasData = yield select(getHasData);
	const { id } = params;

	if (!hasData) {
		try {
			const [ movieDetails ] = yield all([
				call(tmdb.getMovieDetails, {
					id,
					language: "en-US",
				})
			]);

			yield put(add({
				movie: movieDetails
			}));
		} catch (e) {
			console.error(e);
		}
	}
}
