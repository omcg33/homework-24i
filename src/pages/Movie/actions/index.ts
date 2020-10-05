export const ADD = "PAGES/MOVIE/ADD";
export const UNMOUNT = "PAGES/MOVIE/UNMOUNT";

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});

export const unmount = () => ({
	type: UNMOUNT
});
