import { takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native'

import { GET_SEARCH } from './actionTypes';

import { setSearch } from './actions'

import { setIsLoading, setIsSearching } from '../ui/actions';

import * as api from './api';

function* getSearch({ payload }) {
    try {
        yield put(setIsSearching(true))
        const response = yield call(api.getSearch, payload)
        if (response.status === 200) {
            const filterdResults = response.data.results.filter(result => result.media_type === "movie" || result.media_type === "tv")
            if (filterdResults.length === 0) {
                Alert.alert(
                    "No results",
                    "Your search term didn't produce any results."
                )
            }
            yield put(setSearch(filterdResults));
        } 
    } catch (error) {
        console.error(error);
        Alert.alert(
            "Error",
            "Something went wrong. Check your network connection or try it later"
          );
    } finally {
        yield put(setIsSearching(false));
    }
}

export function* watchGetSearch() {
    yield takeLatest(GET_SEARCH, getSearch);
}
