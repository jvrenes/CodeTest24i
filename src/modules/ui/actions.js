import { createActions } from 'redux-actions';

import {
  SET_IS_LOADING,
  SET_IS_SEARCHING
} from './actionTypes';

export const {
  setIsLoading,
  setIsSearching
} = createActions(
  SET_IS_LOADING,
  SET_IS_SEARCHING
);
