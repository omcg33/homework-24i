import axios          from "axios"
import {TMDB_API_KEY, TMDB_API_BASE_PATH} from "../app/consts";

export type IGetPopularMoviesParams = {
	language?: string;
	page?: number;
};
export type IGetPopularTvSeriesParams = {
	language?: string;
	page?: number;
};
export type IGetMovieDiscoverParams = {
	with_genres?: string;
};

export type IGetMovieDetailsParams = {
	id: number;

	language?: string;
}
export type IGetTvShowDetailsParams = {
	id: number;

	language?: string;
}
export type IGetSearchMultiParams = {
	query: string;

	language?: string;
}

const decorateByAuth = (params: Record<string, any>) => ({...params, api_key: TMDB_API_KEY});

// Wrapper over tmdb api for simple use
export const tmdb = {
	getPopularMovies: (params:IGetPopularMoviesParams) => {
		return axios.get(`${TMDB_API_BASE_PATH}/movie/popular`, { params: decorateByAuth(params) }).then(result => result.data)
	},
	getPopularTvSeries: (params:IGetPopularTvSeriesParams) => {
		return axios.get(`${TMDB_API_BASE_PATH}/tv/popular`, { params: decorateByAuth(params) }).then(result => result.data)
	},
	getMovieDiscover: (params:IGetMovieDiscoverParams) => {
		return axios.get(`${TMDB_API_BASE_PATH}/discover/movie`, { params: decorateByAuth(params) }).then(result => result.data)
	},

	getMovieDetails: (params: IGetMovieDetailsParams) => {
		const { id, ...rest } = params;

		return axios.get(`${TMDB_API_BASE_PATH}/movie/${id}`, { params: decorateByAuth(rest) }).then(result => result.data)
	},
	getTvShowDetails: (params: IGetTvShowDetailsParams) => {
		const { id, ...rest } = params;

		return axios.get(`${TMDB_API_BASE_PATH}/tv/${id}`, { params: decorateByAuth(rest) }).then(result => result.data)
	},

	getSearchMulti: (params: IGetSearchMultiParams) => {
		return axios.get(`${TMDB_API_BASE_PATH}/search/multi`, { params: decorateByAuth(params) }).then(result => result.data)
	}
}
