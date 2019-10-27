import { ADD_TODO, TOGGLE_TODO } from "./constants";
import { todoActionsTypes, Todo } from "./types";

const addTodo = (todo: Todo): todoActionsTypes => ({
    type: ADD_TODO,
    payload: todo
});

const toggleTodo = (id: number): todoActionsTypes => ({
    type: TOGGLE_TODO,
    id
});

export {
    addTodo,
    toggleTodo
};