import React from "react";
import cn    from "classnames";
import Row   from "react-bootstrap/Row";
import Col   from "react-bootstrap/Col";
import Form  from "react-bootstrap/Form";

import styles from "./SearchForm.module.scss";

export type IProps = {
	onChange: (e) => void;
	onSubmit: (e) => void;

	search?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const View = React.memo((props: IProps) => {
	const { search, className = "", onChange, onSubmit, ...rest } = props;

	return (
		<div className={cn(styles.searchForm, className)} {...rest}>
			<Form onSubmit={onSubmit}>
				<Row>
					<Col xs={12} md={10}>
						<Form.Control type="text" value={search} onChange={onChange}/>
					</Col>
					<Col xs={12} md={2}>
						<Form.Control as="button" type="submit">Search</Form.Control>
					</Col>
				</Row>
			</Form>
		</div>
	)
})
