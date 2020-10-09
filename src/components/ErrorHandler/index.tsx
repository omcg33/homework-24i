import React         from "react";
import {useLocation} from "react-router-dom";


export type IProps = {
	children: any;

	Page404?: React.Component | React.MemoExoticComponent<any>;
	Page500?: React.Component | React.MemoExoticComponent<any>;
}

export const ErrorHandler = (props: IProps) => {
	const {children, Page404, Page500} = props;
	const location = useLocation();
	const {errorStatusCode} = location.state || {};

	switch (errorStatusCode) {
		case 404: {
			if (Page404)
				return Page404;
		}

		case 500: {
			if (Page500)
				return Page500;
		}

		default:
			return children
	}
};
