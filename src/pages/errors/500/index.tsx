import React, {useCallback} from "react";
import Container            from "react-bootstrap/Container";
import Button               from "react-bootstrap/Button";

import history from "../../../helpers/history";

import {Header} from "../../../components/Header";

import styles from "./Page500.module.scss";


export const Page500 = () => {
	const onReloadClick = useCallback(() => {
		const location = history.location;
		history.replace(location.pathname, {
			...location.state,
			errorStatusCode: undefined
		});

		document.location.reload();
	}, []);

	return (
		<>
			<Header className={styles.header}/>
			<Container className={styles.container}>
				<div className={styles.title}>
					Somethings failed. Please Reload page.
				</div>
				<Button onClick={onReloadClick}>Reload</Button>
			</Container>
		</>
	)
};
