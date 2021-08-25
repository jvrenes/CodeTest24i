import { takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native'

import {
    GET_POPULAR_MOVIES,
} from './actionTypes';

import {
    setPopularMovies
} from './actions'

import {
    setIsLoading,
} from '../ui/actions';

import * as api from './api';

function* getPopularMovies({ payload }) {
    try {
        yield put(setIsLoading(true))
        const response = yield call(api.getPopularMovies);
        if (response.status === 200) {
            yield put(setPopularMovies(response?.data.results));
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

export function* watchGetPopularMovies() {
    yield takeLatest(GET_POPULAR_MOVIES, getPopularMovies);
}
