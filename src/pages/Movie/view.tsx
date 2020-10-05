import React         from "react";

import {PageSpinner} from "../../components/PageSpinner";
import styles        from "../Main/Main.module.scss";
import Container     from "react-bootstrap/Container";

export type IProps = {
	hasData: boolean;
	movie: any;
};

export const View = React.memo((props:IProps) => {
	const { hasData, movie } = props;

	console.log(movie);

	return (
		hasData
			? (
				<>
					<div className={styles.header}/>
					<Container>
					</Container>
					<div className={styles.footer}/>
				</>
			)
			: <PageSpinner/>
	)
})
