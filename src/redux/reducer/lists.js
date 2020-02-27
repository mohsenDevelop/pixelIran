import {
    ADD_TASK,
    DELETE_LIST
} from '../types';

const initialState = {
    tasks: [],
    todo: [],
    complete: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload],
                todo: [...state.todo, payload],

            };

        case DELETE_LIST:
            console.log("payload", payload);
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== payload),
                todo: state.todo.filter(i => i.id !== payload),
            }
        default:
            return state;
    }
}
