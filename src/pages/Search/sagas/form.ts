import {call, put, takeEvery} from "redux-saga/effects";

import {ISubmitAction, SUBMIT} from "../../../components/SearchForm/actions";

import {tmdb} from "../../../helpers/api";
import history       from "../../../helpers/history";

import { setResults} from "../actions";

export function* searchFormListener() {
	yield takeEvery(SUBMIT, function* ({payload: data}: ISubmitAction) {
		const { search } = data;

		if (typeof search === "undefined")
			return;

		try {
			const data = yield call(tmdb.getSearchMulti, { query: search});

			if (data && Array.isArray(data.results))
				yield put(setResults(data.results))

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
	})
}

