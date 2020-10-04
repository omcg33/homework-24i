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
			<div className={styles.imageWrp}>
				<img className={styles.image} src={imageUrl} alt={title}/>
			</div>
			<span className={styles.title}>{ title }</span>
		</Link>
	)
})
