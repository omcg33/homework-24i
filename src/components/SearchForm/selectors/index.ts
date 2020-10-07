import {createSelector} from "reselect";

import {IState} from "./interfaces";

export const getSearch = createSelector(
	(state: IState) => state.search,
	(search: string | undefined) => search
);
