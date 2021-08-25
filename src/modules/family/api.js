import { get, API_KEY } from '../../utils/restClient'

export const getFamilyMovies = async () => get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`)
