import {connect}             from "react-redux";
import {RouteComponentProps} from "react-router-dom";

import {run} from "../../app/actions";

import {unmount}            from "./actions";
import {Controller, IProps}     from "./controller";
import {getHasData, getResults} from "./selectors";

type IStateProps = Pick<IProps, "params" | "hasData" | "results">;
type IDispatchProps = Pick<IProps, "run" | "unmount">;
export type IOwnProps = RouteComponentProps<{ id: string }> & Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (state: any, props: IOwnProps): IStateProps => {
	return {
		params: { },
		hasData: getHasData(state),
		results: getResults(state),
	};
};


const mapDispatchToProps: IDispatchProps = {
	run,
	unmount,
};


export const Container = connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Controller);
