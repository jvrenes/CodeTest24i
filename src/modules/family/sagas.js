import { takeLatest, put, call } from 'redux-saga/effects'
import { Alert } from 'react-native'

import {
    GET_FAMILY_MOVIES,
} from './actionTypes';

import {
    setFamilyMovies
} from './actions'

import {
    setIsLoading,
} from '../ui/actions';

import * as api from './api';

function* getFamilyMovies({ payload }) {
    try {
        yield put(setIsLoading(true))
        const response = yield call(api.getFamilyMovies);
        if (response.status === 200) {
            yield put(setFamilyMovies(response?.data.results));
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

export function* watchGetFamilyMovies() {
    yield takeLatest(GET_FAMILY_MOVIES, getFamilyMovies);
}
