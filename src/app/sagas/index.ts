import {fork, takeEvery} from "redux-saga/effects";

import {RUN, IRunAction} from "../actions";

export function* rootSaga() {
	yield takeEvery(RUN, function* ({meta}: IRunAction) {
		yield fork(meta.saga, meta.params);
	});
}
