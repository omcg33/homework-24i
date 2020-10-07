import { ISubmitData } from "../interfaces";

export const CHANGE = "SEARCH_FORM/CHANGE";
export const SUBMIT = "SEARCH_FORM/SUBMIT";

export type ISubmitAction = {
	type: string,
	payload: ISubmitData
};

export const change = (value?: string) => ({
	type: CHANGE,
	payload: value
})

export const submit = (data: ISubmitData) => ({
	type: SUBMIT,
	payload: data
})
