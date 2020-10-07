import React     from "react";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import {Header}      from "../../components/Header";
import {PageSpinner} from "../../components/PageSpinner";

import {SearchForm} from "./containers/searchForm";
import styles       from "./Search.module.scss";

export type IProps = {
	hasData: boolean;

	results?: any[];
};

export const View = React.memo((props:IProps) => {
	const { hasData, results } = props;


	return (
		hasData
			? (
				<>
					<Header className={styles.header}/>
					<Container className={styles.container}>
						<Row>
							<Col xs={12}>
								<SearchForm/>
							</Col>
							<Col xs={12}>
								{
									JSON.stringify(results)
								}
							</Col>
						</Row>
					</Container>
					<div className={styles.footer}/>
				</>
			)
			: <PageSpinner/>
	)
})
