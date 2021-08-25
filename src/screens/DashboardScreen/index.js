// Libraries
import { connect } from 'react-redux';
import View from './view';

// Actions
import { getPopularMovies } from '../../modules/popularMovies/actions'
import { getPopularTv } from '../../modules/popularTv/actions'
import { getFamilyMovies } from '../../modules/family/actions'
import { getDocumentary } from '../../modules/documentary/actions'
import { getSearch, clearSearch } from '../../modules/search/actions'



export default connect(
    (state) => ({
        ui: state.ui,
        popularMovies: state.popularMovies,
        popularTv: state.popularTv,
        family: state.family,
        documentary: state.documentary,
        search: state.search
    }), {
        getPopularMovies,
        getPopularTv,
        getFamilyMovies,
        getDocumentary,
        getSearch,
        clearSearch
    }
)(View)