import {take, fork} from "redux-saga/effects";


import {UNMOUNT} from "../actions";

import {searchFormListener} from "./form";

export function* initSaga() {
	const listeners: any[] = [];
	listeners.push(yield fork(searchFormListener));

	yield take(UNMOUNT);
	listeners.forEach(listener => listener.cancel());
}

