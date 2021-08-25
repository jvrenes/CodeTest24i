import { takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native'

import {
    GET_POPULAR_TV,
} from './actionTypes';

import {
    setPopularTv
} from './actions'

import {
    setIsLoading,
} from '../ui/actions';

import * as api from './api';

function* getPopularTv() {
    try {
        yield put(setIsLoading(true))
        const response = yield call(api.getPopularTv);
        if (response.status === 200) {
            yield put(setPopularTv(response?.data.results));
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

export function* watchGetPopularTv() {
    yield takeLatest(GET_POPULAR_TV, getPopularTv);
}
