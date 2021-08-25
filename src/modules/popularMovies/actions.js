import { createActions } from "redux-actions"

import {
    GET_POPULAR_MOVIES,
    SET_POPULAR_MOVIES
} from "./actionTypes"

export const {
    getPopularMovies,
    setPopularMovies
} = createActions(
    GET_POPULAR_MOVIES,
    SET_POPULAR_MOVIES
)