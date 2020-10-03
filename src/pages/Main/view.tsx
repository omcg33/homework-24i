import React   from "react";

import {PageSpinner} from "../../components/PageSpinner";

export type IProps = {
	hasData: boolean;
};


export const View = React.memo((props:IProps) => {
	const { hasData } = props;
	return (
		<>
			{
				hasData
					? "MAIN"
					: <PageSpinner/>
			}
		</>
	)
})
