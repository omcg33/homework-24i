import React                   from "react";
import Spinner, {SpinnerProps} from "react-bootstrap/Spinner";
import cn                      from "classnames";

import styles from "./PageSpinner.module.scss";

export type IProps = Omit<SpinnerProps, "animation">;

export const PageSpinner = React.memo((props:IProps) => {
	const { className = "", ...rest } = props;
	return <Spinner animation="grow" className={cn(styles.pageSpinner, className)} {...rest}/>
})
