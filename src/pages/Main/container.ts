import {connect} from "react-redux";

import {run} from "../../app/actions";

import {unmount}                                                                                 from "./actions";
import {Controller, IProps}                                                                      from "./controller";
import {getHasData, getPopularMovies, getPopularTvSeries, getFamilyMovies, getDocumentaryMovies} from "./selectors";

type IStateProps = Pick<IProps, "params" | "hasData" | "popularMovies" | "popularTvSeries" | "familyMovies" | "documentaryMovies">;
type IDispatchProps = Pick<IProps, "run" | "unmount">;
export type IOwnProps = Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (state: any): IStateProps => {
	return {
		params: {},
		hasData: getHasData(state),
		popularMovies: getPopularMovies(state),
		popularTvSeries: getPopularTvSeries(state),
		familyMovies: getFamilyMovies(state),
		documentaryMovies: getDocumentaryMovies(state),
	};
};


const mapDispatchToProps: IDispatchProps = {
	run,
	unmount
};


export const Container = connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Controller);
