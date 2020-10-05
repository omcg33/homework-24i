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
	familyMovies?: any[];
	documentaryMovies?: any[];
};


export const View = React.memo((props:IProps) => {
	const { hasData, popularMovies, popularTvSeries, familyMovies, documentaryMovies } = props;

	return (
			hasData
				? (
					<>
						<div className={styles.header}/>
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
											Popular Series
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

						{
							!!familyMovies && familyMovies.length > 0
								? (
									<div className={styles.familyMoviesWrp}>
										<h2 className={styles.familyMoviesTitle}>
											Family
										</h2>
										<ResponsiveSlider
											className={styles.familyMovies}
											settings={{
												equalSlidesHeight: true
											}}
										>
											{
												familyMovies.map(movie => (
													<MovieCard
														key={movie.id}
														to={`/movie/${movie.id}`}
														title={movie.title}
														imageUrl={createImagePosterUrl(movie.poster_path)}
														className={styles.familyMovie}
													/>
												))
											}
										</ResponsiveSlider>
									</div>
								)
								: null
						}

						{
							!!documentaryMovies && documentaryMovies.length > 0
								? (
									<div className={styles.documentaryMoviesWrp}>
										<h2 className={styles.documentaryMoviesTitle}>
											Documentary
										</h2>
										<ResponsiveSlider
											className={styles.documentaryMovies}
											settings={{
												equalSlidesHeight: true
											}}
										>
											{
												documentaryMovies.map(movie => (
													<MovieCard
														key={movie.id}
														to={`/movie/${movie.id}`}
														title={movie.title}
														imageUrl={createImagePosterUrl(movie.poster_path)}
														className={styles.documentaryMovie}
													/>
												))
											}
										</ResponsiveSlider>
									</div>
								)
								: null
						}
					</Container>
						<div className={styles.footer}/>
					</>
				)
				: <PageSpinner/>
	)
})
