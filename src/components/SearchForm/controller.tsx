import React, {useCallback} from "react";

import {ISubmitData}                from "./interfaces";
import {View, IProps as IViewProps} from "./view";


export type IProps =
	{}
	& Overwrite<IViewProps, { onSubmit?: (data: ISubmitData) => void, onChange?: (search?: string) => void }>;

export const Controller = React.memo((props: IProps) => {
	const {onSubmit, onChange, search} = props;

	const onSubmitController = useCallback((e) => {
		e.preventDefault();

		if (typeof onSubmit === "function")
			onSubmit({search});

	}, [onSubmit, search])
	const onChangeController = useCallback((e) => {
		e.preventDefault();

		if (typeof onChange === "function")
			onChange(e.target.value);

	}, [onChange])

	return (
		<View
			onChange={onChangeController}
			onSubmit={onSubmitController}
		/>
	)
})
