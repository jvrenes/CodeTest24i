import { handleActions } from 'redux-actions';
import {
  setIsLoading,
  setIsSearching
} from './actions';

const defaultState = {
  isLoading: false,
  isSearching: false,
};

export default handleActions(
  {
    [setIsLoading]: (state, { payload }) => ({ ...state, isLoading: payload }),
    [setIsSearching]: (state, { payload }) => ({ ...state, isSearching: payload }),
  },
  defaultState,
);
