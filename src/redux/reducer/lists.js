import {
    ADD_TASK,
    DELETE_LIST,
    MARKED_LIST,
    SELECT_LIST,
    UPDATE_LIST,
} from '../types';

const initialState = {
    tasks: [],
    todo: [],
    marked: [],
    selectedList: {},
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
                tasks: state.tasks && state.tasks.length > 0 ? state.tasks.filter(i => i.id !== payload) : [],
                todo: state.todo.filter(i => i.id !== payload),
                marked: state.marked && state.marked.length > 0 ? state.marked.filter(i => i.id !== payload) : [],
                selectedList: {},
            };

        case MARKED_LIST:
            return {
                ...state,
                todo: state.todo.filter(i => i.id !== payload),
                marked: [...state.marked, ...state.tasks.filter(i => i.id === payload)]
            };
        case SELECT_LIST:
            return {
                ...state,
                selectedList: payload
            };

        case UPDATE_LIST:
            return {
                ...state,
                tasks: state.tasks.map(i => i.id === payload.id ? i = payload : i),
                todo: state.todo.map(i => i.id === payload.id ? i = payload : i),
                marked: state.marked && state.marked.length > 0 ? state.marked.map(i => i.id === payload.id ? i = payload : i) : [],
            }
        default:
            return state;
    }
}
