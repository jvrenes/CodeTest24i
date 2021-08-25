import { handleActions } from 'redux-actions';
import {
  clearSearch,
  setSearch,
} from './actions';


const defaultState = []

export default handleActions(
  {
    [setSearch]: (state, { payload }) => ([ ...payload ]),
    [clearSearch]: (state, {payload}) => (defaultState)
  },
  defaultState,
);
