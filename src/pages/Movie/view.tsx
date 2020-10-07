import React     from "react";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button    from "react-bootstrap/Button";


import { ShakaPlayer} from "../../components/Player";
import {PageSpinner}  from "../../components/PageSpinner";

import styles                 from "./Movie.module.scss";
import {createImagePosterUrl} from "../../app/helpers";


export type IProps = {
	hasData: boolean;
	movie: any;

	isPlayerOpened: boolean;
	onWatchButtonClick: () => void;
	onPlayerCloseButtonClick: () => void;
};

export const View = React.memo((props:IProps) => {
	const { hasData, movie, onWatchButtonClick, onPlayerCloseButtonClick, isPlayerOpened } = props;
	const title = movie?.title;
	const description = movie?.overview;
	const genres = movie?.genres;
	const voteAverage = movie?.vote_average;
	const releaseDate = movie?.release_date;
	const formatedReleaseData = releaseDate ? new Intl.DateTimeFormat().format(new Date(releaseDate)) : undefined

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

								<Button
									block
									size="lg"
									className={styles.playButton}
									onClick={onWatchButtonClick}
								>
									Watch
								</Button>
							</Col>
							<Col xs md={6}>
								<div className={styles.posterWrp} onClick={onWatchButtonClick}>
									<img src={createImagePosterUrl(movie.poster_path, "w500")} alt={title}/>
								</div>
							</Col>
						</Row>

					</Container>
					{
						isPlayerOpened
							? (
								<ShakaPlayer
									fullscreen
									autoPlay
									title={title}
									src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
									onClose={onPlayerCloseButtonClick}
								/>
							)
							: null
					}

					<div className={styles.footer}/>
				</>
			)
			: <PageSpinner/>
	)
})
