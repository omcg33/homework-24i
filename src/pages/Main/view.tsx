import React     from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Container";
// import Column from "react-bootstrap/Container";

import {createImagePosterUrl} from "../../app/helpers";

import {PageSpinner}      from "../../components/PageSpinner";
import {MovieCard}        from "../../components/Card/Movie";
import {ResponsiveSlider} from "../../components/Slider/Responsive";

import styles             from "./Main.module.scss";

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

							{
								!!popularMovies && popularMovies.length > 0
									? (
										<div className={styles.popularMoviesWrp}>
											<h2 className={styles.popularMoviesTitle}>
												Popular Movies
											</h2>
											<ResponsiveSlider
												className={styles.popularMovies}
												settings={{
													equalSlidesHeight: true
												}}
											>
												{
													popularMovies.map(movie => (
														<MovieCard
															key={movie.id}
															to={`/movies/${movie.id}`}
															title={movie.title}
															imageUrl={createImagePosterUrl(movie.poster_path)}
															className={styles.popularMovie}
														/>
													))
												}
											</ResponsiveSlider>
										</div>
									)
									: null
							}


						</Container>
					)
					: <PageSpinner/>
			}
		</>
	)
})
