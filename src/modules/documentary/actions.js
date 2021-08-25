import { createActions } from "redux-actions"

import {
    GET_DOCUMENTARY,
    SET_DOCUMENTARY
} from "./actionTypes"

export const {
    getDocumentary,
    setDocumentary
} = createActions(
    GET_DOCUMENTARY,
    SET_DOCUMENTARY
)