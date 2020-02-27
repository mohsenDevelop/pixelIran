import { DELETE_LIST } from "../types";

export const deletingList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    }
} 