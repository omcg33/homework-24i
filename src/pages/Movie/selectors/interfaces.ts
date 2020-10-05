import { PAGE_KEY } from "../reducers";

export interface IState {
	[PAGE_KEY]: Record<string, any> | undefined;
}
