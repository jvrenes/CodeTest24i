import { handleActions } from 'redux-actions';
import {
  setPopularMovies,
} from './actions';


const defaultState = []

export default handleActions(
  {
    [setPopularMovies]: (state, { payload }) => ([ ...payload ]),
  },
  defaultState,
);
