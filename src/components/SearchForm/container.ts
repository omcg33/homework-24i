import {connect} from "react-redux";

import {change, submit}     from "./actions";
import {Controller, IProps} from "./controller";
import {getSearch}          from "./selectors";

type IStateProps = Pick<IProps, "search">;
type IDispatchProps = Pick<IProps, "onChange" | "onSubmit">;
export type IOwnProps = Omit<IProps, keyof IStateProps | keyof IDispatchProps>

const mapStateToProps = (dataSelector) => (state: any, ownProps: any) => {
	const componentState = dataSelector(state);

	if (!componentState)
		return {};

	return {
		...ownProps,
		search: getSearch(componentState),
	};
};

const mapDispatchToProps: IDispatchProps = {
	onChange: change,
	onSubmit: submit
};

export const Container = (selector) => connect<IStateProps, IDispatchProps, IOwnProps, any>(mapStateToProps(selector), mapDispatchToProps)(Controller);
