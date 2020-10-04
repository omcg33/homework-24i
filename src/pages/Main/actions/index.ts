export const ADD        = 'PAGES/MAIN/ADD';

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});
