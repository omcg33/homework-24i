import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "./Header.module.scss";

export type IProps = {

} & React.HTMLAttributes<HTMLDivElement>;

export const Header = React.memo((props: IProps) => {
	const { className = "", ...rest } = props;

	return (
		<div className={cn(styles.header, className)} {...rest}>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={10}>
						<NavLink
							to="/"
							exact
							className={styles.menuItem}
							activeClassName={styles.menuItemActive}
						>
							Main
						</NavLink>
					</Col>
					<Col xs={12} md={4} lg={2}>
						<NavLink
							to="/search"
							exact
							className={styles.menuItem}
							activeClassName={styles.menuItemActive}
						>
							Search
						</NavLink>
					</Col>
				</Row>

			</Container>
		</div>
	)
})
