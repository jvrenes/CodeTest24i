import { handleActions } from 'redux-actions';
import {
  setPopularTv,
} from './actions';


const defaultState = []

export default handleActions(
  {
    [setPopularTv]: (state, { payload }) => ([ ...payload ]),
  },
  defaultState,
);
