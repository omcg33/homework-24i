import {Saga} from "redux-saga";

export const RUN = "SAGAS/RUN";

export interface IRunActionMeta {
	saga: Saga;
	params?: Object;
}

export interface IRunAction {
	type: string;
	meta: IRunActionMeta;
}

export const run = (meta: IRunActionMeta): IRunAction => ({
	type: RUN,
	meta
});
