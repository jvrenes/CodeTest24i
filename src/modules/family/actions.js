import { createActions } from "redux-actions"

import {
    GET_FAMILY_MOVIES,
    SET_FAMILY_MOVIES
} from "./actionTypes"

export const {
    getFamilyMovies,
    setFamilyMovies
} = createActions(
    GET_FAMILY_MOVIES,
    SET_FAMILY_MOVIES
)