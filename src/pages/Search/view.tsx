import React     from "react";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import {Header}       from "../../components/Header";
import {MovieCard}    from "../../components/Card/Movie";
import {TvSeriesCard} from "../../components/Card/TvSeries";
import {PageSpinner}  from "../../components/PageSpinner";

import {SearchForm}           from "./containers/searchForm";
import styles                 from "./Search.module.scss";
import {createImagePosterUrl} from "../../app/helpers";

export type IProps = {
	hasData: boolean;

	results: any[] | null;
};
export class View extends React.PureComponent<IProps> {
	private _renderResults() {
		const { results } = this.props;

		return Array.isArray(results) && results.length > 0
			? (
				<Row className={styles.results}>
					{
						results
							.map(result => {
								const {media_type} = result;

								return (
									<Col xs={4} md={3} className={styles.result} key={result.id}>
										{ media_type === "movie" ? this._renderMovie(result) : null }
										{ media_type === "tv" ? this._renderTvShow(result) : null }
										{ media_type === "person" ? this._renderPerson(result) : null }
									</Col>
								)
							})
					}
				</Row>
			)
			: <div className={styles.notFound}>Not found</div>
	}

	private _renderMovie(movie) {
		const { id, poster_path, title} = movie;

		return (
			<MovieCard
				key={id}
				to={`/movies/${id}`}
				title={title}
				imageUrl={createImagePosterUrl(poster_path)}
			/>
		)
	}

	private _renderTvShow(tv) {
		const { id, poster_path, name} = tv;

		return (
			<TvSeriesCard
				key={id}
				to={`/tv/${id}`}
				title={name}
				imageUrl={createImagePosterUrl(poster_path)}
			/>
		)
	}

	private _renderPerson(person) {
		const { name } = person;

		return (
			<div>
				Person: { name }
			</div>
		)
	}
	render() {
		const { hasData, results } = this.props;

		return (
			hasData
				? (
					<>
						<Header className={styles.header}/>
						<Container className={styles.container}>
							<Row>
								<Col xs={12}>
									<SearchForm/>
								</Col>
							</Row>
							{
								results !== null
									? this._renderResults()
									: null
							}
						</Container>
						<div className={styles.footer}/>
					</>
				)
				: <PageSpinner/>
		)
	}
}
