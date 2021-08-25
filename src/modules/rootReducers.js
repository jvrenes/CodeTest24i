// npm packages
import { combineReducers } from 'redux'

// modules
import ui from './ui/reducers'
import popularMovies from './popularMovies/reducers'
import popularTv from './popularTv/reducers'
import family from './family/reducers'
import documentary from './documentary/reducers'
import search from './search/reducers'

export default combineReducers({
    popularMovies,
    popularTv,
    family,
    documentary,
    search,
    ui,
});
