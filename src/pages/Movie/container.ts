import {connect} from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import {run} from "../../app/actions";

import {unmount}              from "./actions";
import {Controller, IProps}   from "./controller";
import {getHasData, getMovie} from "./selectors";

type IStateProps = Pick<IProps, "params" | "hasData" | "movie">;
type IDispatchProps = Pick<IProps, "run" | "unmount">;
export type IOwnProps = RouteComponentProps<{ id: string }> & Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (state: any, props: IOwnProps): IStateProps => {
	const { match: { params: { id } } } = props;

	return {
		params: { id: parseInt(id, 10) },
		hasData: getHasData(state),
		movie: getMovie(state)
	};
};


const mapDispatchToProps: IDispatchProps = {
	run,
	unmount
};


export const Container = connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Controller);
