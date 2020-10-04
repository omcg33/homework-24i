import React             from "react";
import cn                from "classnames";
import {Link, LinkProps} from "react-router-dom";

import styles from "./Movie.module.scss";

export type IProps = {
	title: string;
	imageUrl: string;
} & LinkProps;

export const MovieCard = React.memo((props:IProps) => {
	const { id, title, imageUrl, className = "", ...rest } = props;
	return (
		<Link
			className={cn(styles.movieCard, className)}
			{...rest}
		>
			<span className={styles.title}>{ title }</span>
			<img src={imageUrl} alt={title}/>
		</Link>
	)
})
