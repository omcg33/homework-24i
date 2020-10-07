import React     from "react";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button    from "react-bootstrap/Button";


import { ShakaPlayer} from "../../components/Player";
import {PageSpinner}  from "../../components/PageSpinner";

import styles                 from "./TvShow.module.scss";
import {createImagePosterUrl} from "../../app/helpers";


export type IProps = {
	hasData: boolean;
	tvShow: any;

	isPlayerOpened: boolean;
	onWatchButtonClick: () => void;
	onPlayerCloseButtonClick: () => void;
};

export const View = React.memo((props:IProps) => {
	const { hasData, tvShow, onWatchButtonClick, onPlayerCloseButtonClick, isPlayerOpened } = props;
	console.log(tvShow);

	const title = tvShow?.name;
	const description = tvShow?.overview;
	const genres = tvShow?.genres;
	const voteAverage = tvShow?.vote_average;
	const firstAirDate = tvShow?.first_air_date;
	const posterPath = tvShow?.poster_path;
	const formatedFirstAirDate = firstAirDate ? new Intl.DateTimeFormat().format(new Date(firstAirDate)) : undefined

	return (
		hasData
			? (
				<>
					<div className={styles.header}/>
					<Container>
						<Row>
							<Col xs={12} md={6}>
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
										!!formatedFirstAirDate
											? <div className={styles.metaItem}>First air date: { formatedFirstAirDate }</div>
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
							<Col xs={12} md={6}>
								<div className={styles.posterWrp} onClick={onWatchButtonClick}>
									<img className={styles.poster} src={createImagePosterUrl(posterPath, "w500")} alt={title}/>
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
