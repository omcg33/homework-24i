export const ADD = "PAGES/TVSERIES/ADD";
export const UNMOUNT = "PAGES/TVSERIES/UNMOUNT";

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});

export const unmount = () => ({
	type: UNMOUNT
});
