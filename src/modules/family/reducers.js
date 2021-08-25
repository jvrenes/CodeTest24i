import { handleActions } from 'redux-actions';
import {
  setFamilyMovies,
} from './actions';


const defaultState = []

export default handleActions(
  {
    [setFamilyMovies]: (state, { payload }) => ([ ...payload ]),
  },
  defaultState,
);
