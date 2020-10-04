import React   from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Container";
// import Column from "react-bootstrap/Container";

import {PageSpinner} from "../../components/PageSpinner";
import {MovieCard}   from "../../components/Card/Movie";

import styles from "./Main.module.scss";

export type IProps = {
	hasData: boolean;
	popularMovies: any;
};


export const View = React.memo((props:IProps) => {
	const { hasData, popularMovies } = props;

	return (
		<>
			{
				hasData
					? (
						<Container>
							<h1 className={styles.appName}>Homework for 24i</h1>

							<MovieCard
								to={`/movies/${popularMovies[0].id}`}
								title={popularMovies[0].title}
								imageUrl={`https://image.tmdb.org/t/p/w200${popularMovies[0].poster_path}`}
							/>
						</Container>
					)
					: <PageSpinner/>
			}
		</>
	)
})
