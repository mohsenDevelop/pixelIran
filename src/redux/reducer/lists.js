import {
    ADD_TASK,
    DELETE_LIST,
    MARKED_LIST
} from '../types';

const initialState = {
    tasks: [],
    todo: [],
    marked: [],
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
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== payload),
                todo: state.todo.filter(i => i.id !== payload),
            };

        case MARKED_LIST:
            return {
                ...state,
                todo: state.todo.filter(i => i.id !== payload),
                marked: [...state.marked, ...state.tasks.filter(i => i.id === payload)]
            }
        default:
            return state;
    }
}
