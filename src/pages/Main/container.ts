import { connect } from "react-redux";

import { run } from "../../app/actions";

import { Controller, IProps } from "./controller";

type IStateProps = Pick<IProps, "params" | "hasData">;
type IDispatchProps = Pick<IProps, "run">;
export type IOwnProps = Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (state: any): IStateProps => {
	return {
		params: {},
		hasData: false
	};
};


const mapDispatchToProps: IDispatchProps = {
	run
};


export const Container = connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps, mapDispatchToProps)(Controller);
