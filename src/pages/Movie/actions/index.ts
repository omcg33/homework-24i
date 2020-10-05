export const ADD        = 'PAGES/MOVIE/ADD';

export const add = (data: Record<string, any>) => ({
	type: ADD,
	payload: data
});
