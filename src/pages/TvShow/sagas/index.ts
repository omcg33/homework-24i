import {all, call, select, put} from "redux-saga/effects";

import {tmdb}       from "../../../helpers/api";
import history      from "../../../helpers/history";

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
			const [ tvShowDetails ] = yield all([
				call(tmdb.getTvShowDetails, {
					id,
					language: "en-US",
				})
			]);

			yield put(add({
				tvShow: tvShowDetails
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
