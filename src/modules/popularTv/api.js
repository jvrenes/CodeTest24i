import { get, API_KEY } from '../../utils/restClient'

export const getPopularTv = async () => get(`tv/popular?api_key=${API_KEY}&language=en-US&page=1`)