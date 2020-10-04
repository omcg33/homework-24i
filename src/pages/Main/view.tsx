import React     from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Container";
// import Column from "react-bootstrap/Container";

import {createImagePosterUrl} from "../../app/helpers";

import {PageSpinner}      from "../../components/PageSpinner";
import {MovieCard}        from "../../components/Card/Movie";
import {TvSeriesCard}     from "../../components/Card/TvSeries";
import {ResponsiveSlider} from "../../components/Slider/Responsive";

import styles             from "./Main.module.scss";

export type IProps = {
	hasData: boolean;
	popularMovies?: any[];
	popularTvSeries?: any[];
};


export const View = React.memo((props:IProps) => {
	const { hasData, popularMovies, popularTvSeries } = props;

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

							{
								!!popularTvSeries && popularTvSeries.length > 0
									? (
										<div className={styles.popularTvSeriesWrp}>
											<h2 className={styles.popularTvSeriesTitle}>
												Popular Tv Series
											</h2>
											<ResponsiveSlider
												className={styles.popularTvSeriesSlider}
												settings={{
													equalSlidesHeight: true
												}}
											>
												{
													popularTvSeries.map(item => (
														<TvSeriesCard
															key={item.id}
															to={`/tvseries/${item.id}`}
															title={item.name}
															imageUrl={createImagePosterUrl(item.poster_path)}
															className={styles.popularTvSeries}
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
