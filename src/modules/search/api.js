import { get, API_KEY } from '../../utils/restClient'

export const getSearch = async (query) => get(`search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
