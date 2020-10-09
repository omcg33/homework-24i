import React, {useCallback} from "react";
import { useHistory } from 'react-router-dom';
import Container            from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {Header}  from "../../../components/Header";

import styles    from "./Page404.module.scss";


export const Page404 = React.memo(() => {
	const history = useHistory();
	const onReturnClick = useCallback(() => {
		history.go(-1);
	},[]);

	return (
		<>
			<Header className={styles.header}/>
			<Container className={styles.container}>
				<div className={styles.title}>
					Page not Found
				</div>
				<Button onClick={onReturnClick}>Return</Button>
			</Container>
		</>
	)
})
