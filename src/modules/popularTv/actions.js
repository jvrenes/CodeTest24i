import { createActions } from "redux-actions"

import {
    GET_POPULAR_TV,
    SET_POPULAR_TV
} from "./actionTypes"

export const {
    getPopularTv,
    setPopularTv
} = createActions(
    GET_POPULAR_TV,
    SET_POPULAR_TV
)