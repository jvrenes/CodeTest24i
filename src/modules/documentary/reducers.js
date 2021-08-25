import { handleActions } from 'redux-actions';
import {
  setDocumentary,
} from './actions';


const defaultState = []

export default handleActions(
  {
    [setDocumentary]: (state, { payload }) => ([...payload ]),
  },
  defaultState,
);
