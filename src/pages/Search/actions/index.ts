export const ADD = "PAGES/SEARCH/ADD";
export const UNMOUNT = "PAGES/SEARCH/UNMOUNT";

export const SET_RESULTS = "PAGES/SEARCH/RESULTS/SET";

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});

export const unmount = () => ({
	type: UNMOUNT
});


export const setResults = (data: any[]) => ({
	type: SET_RESULTS,
	payload: data
});
