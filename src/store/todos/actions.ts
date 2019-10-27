import { ADD_TODO, TOGGLE_TODO } from "./constants";
import { todoActionsTypes, Todo } from "./types";

const addTodo = (todo: Todo): todoActionsTypes => ({
    type: ADD_TODO,
    payload: todo
});

const toggleTodo = (id: Todo["id"]): todoActionsTypes => ({
    type: TOGGLE_TODO,
    id
});

export {
    addTodo,
    toggleTodo
};