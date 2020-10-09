import React, { FunctionComponent}         from "react";
import history       from "../../helpers/history";


export type IProps = {
	children: any;

	Page404: FunctionComponent;
	Page500: FunctionComponent;
}

export const ErrorHandler = (props: IProps) => {
	const {children, Page404, Page500} = props;
	const {errorStatusCode} = history.location.state || {};

	console.log(errorStatusCode);

	switch (errorStatusCode) {
		case 404: {
			return <Page404/>;
		}

		case 500: {
			return <Page500/>;
		}

		default:
			return children
	}
};
