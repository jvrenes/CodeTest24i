import { takeLatest, put, call } from 'redux-saga/effects'
import { Alert } from 'react-native'

import {
    GET_DOCUMENTARY,
} from './actionTypes';

import {
    setDocumentary
} from './actions'

import {
    setIsLoading,
} from '../ui/actions';

import * as api from './api';

function* getDocumentary({ payload }) {
    try {
        yield put(setIsLoading(true))
        const response = yield call(api.getDocumentary);
        if (response.status === 200) {
            yield put(setDocumentary(response?.data.results));
        }
    } catch (error) {
        console.error(error);
        Alert.alert(
            "Error",
            "Something went wrong. Check your network connection or try it later"
          );
    } finally {
        yield put(setIsLoading(false));
    }
}

export function* watchGetDocumentary() {
    yield takeLatest(GET_DOCUMENTARY, getDocumentary);
}
