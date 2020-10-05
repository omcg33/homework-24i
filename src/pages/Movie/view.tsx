import React     from "react";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import {PageSpinner} from "../../components/PageSpinner";

import styles from "./Movie.module.scss";


export type IProps = {
	hasData: boolean;
	movie: any;
};

export const View = React.memo((props:IProps) => {
	const { hasData, movie } = props;
	const title = movie?.title;
	const description = movie?.overview;
	const genres = movie?.genres;
	const voteAverage = movie?.vote_average;
	const releaseDate = movie?.release_date;
	const formatedReleaseData = releaseDate ? new Intl.DateTimeFormat().format(new Date(releaseDate)) : undefined
	console.log(movie);

	return (
		hasData
			? (
				<>
					<div className={styles.header}/>
					<Container>
						<Row>
							<Col xs md={6}>
								<h1 className={styles.title}>
									{ title }
								</h1>

								<div className={styles.description}>
									{ description }
								</div>

								<div className={styles.meta}>
									{
										!!genres && genres.length > 0
											? <div className={styles.metaItem}>
												Genres: {" "}
												{
													genres.map(genre => genre.name ).join(", ")
												}
											 </div>
											: null
									}
									{
										!!formatedReleaseData
											? <div className={styles.metaItem}>Release Date: { formatedReleaseData }</div>
											: null
									}
									{
										!!voteAverage
											? <div className={styles.metaItem}>Rating: { voteAverage }/10</div>
											: null
									}
								</div>
							</Col>
							<Col xs md={6}>
								<div style={{height: "500px", background: "red"}}/>
							</Col>
						</Row>

					</Container>
					<div className={styles.footer}/>
				</>
			)
			: <PageSpinner/>
	)
})
