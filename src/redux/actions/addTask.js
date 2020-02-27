import { ADD_TASK } from "../types";
import { uuid } from "uuidv4";

export const addingTask = (content) => {
    const id = uuid();
    return {
        type: ADD_TASK,
        payload: { id, content }
    }
}