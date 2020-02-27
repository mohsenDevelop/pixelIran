import { SELECT_LIST, UPDATE_LIST } from "../types";

export const selectedList = (item) => {
    return {
        type: SELECT_LIST,
        payload: item
    }
}

export const updateList = (id, content) => {
    return {
        type: UPDATE_LIST,
        payload: { id, content }
    }
} 