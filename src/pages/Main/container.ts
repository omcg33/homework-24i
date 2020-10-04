import {connect} from "react-redux";

import {run} from "../../app/actions";

import {Controller, IProps}           from "./controller";
import {getHasData, getPopularMovies} from "./selectors";

type IStateProps = Pick<IProps, "params" | "hasData" | "popularMovies">;
type IDispatchProps = Pick<IProps, "run">;
export type IOwnProps = Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (state: any): IStateProps => {
	return {
		params: {},
		hasData: getHasData(state),
		popularMovies: getPopularMovies(state)
	};
};


const mapDispatchToProps: IDispatchProps = {
	run
};


export const Container = connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Controller);
