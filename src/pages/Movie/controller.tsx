import React, {useEffect} from "react";

import {IRunActionMeta} from "../../app/actions";

import {View, IProps as IViewProps} from "./view";
import {initSaga}                   from "./sagas";

export type IProps = {
	run: (meta: IRunActionMeta) => void;
	unmount: () => void;
	params: { id: number };
} & IViewProps;

export const Controller = React.memo((props: IProps) => {
	const {run, unmount, params, ...rest} = props;

	useEffect(() => {
			run({
				saga: initSaga,
				params
			})

			return () => {
				unmount();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return (
		<View
			{...rest}
		/>
	);
})
