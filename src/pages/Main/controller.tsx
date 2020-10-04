import React, {useEffect} from "react";

import {IRunActionMeta} from "../../app/actions";

import {View, IProps as IViewProps} from "./view";
import {initSaga}                   from "./sagas";

export type IProps = {
	run: (meta: IRunActionMeta) => void;
	params: Object;
} & IViewProps;

export const Controller = React.memo((props: IProps) => {
	const {run, params, ...rest} = props;

	useEffect(() => {
		run({
			saga: initSaga,
			params
		})
	}, [run, params]);

	return (
		<View
			{...rest}
		/>
	);
})
