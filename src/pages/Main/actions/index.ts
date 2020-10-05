export const ADD = "PAGES/MAIN/ADD";
export const UNMOUNT = "PAGES/MAIN/UNMOUNT";

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});

export const unmount = () => ({
	type: UNMOUNT
});
