// sagas
import { all } from 'redux-saga/effects';

// Listeners
import { watchSetIsLoading } from './ui/sagas';
import { watchGetPopularMovies } from './popularMovies/sagas'
import { watchGetPopularTv } from './popularTv/sagas'
import { watchGetFamilyMovies } from './family/sagas'
import { watchGetDocumentary } from './documentary/sagas'
import { watchGetSearch } from './search/sagas';

export default function* rootSaga() {
  yield all([
    watchGetPopularMovies(),
    watchGetPopularTv(),
    watchGetFamilyMovies(),
    watchGetDocumentary(),
    watchGetSearch()
  ]);
}
