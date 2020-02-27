import { MARKED_LIST } from "../types";

export const marketingList = (id) => {
    return {
        type: MARKED_LIST,
        payload: id
    }
} 