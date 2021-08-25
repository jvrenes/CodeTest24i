import { createActions } from "redux-actions"

import {
    GET_SEARCH,
    SET_SEARCH,
    CLEAR_SEARCH
} from "./actionTypes"

export const {
    getSearch,
    setSearch,
    clearSearch
} = createActions(
    GET_SEARCH,
    SET_SEARCH,
    CLEAR_SEARCH
)