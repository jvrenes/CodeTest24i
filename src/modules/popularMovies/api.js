import { get, API_KEY } from '../../utils/restClient'

export const getPopularMovies = async () => get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)