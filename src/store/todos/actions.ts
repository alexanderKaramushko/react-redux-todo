import { ADD_TODO } from "./constants";
import { todoActionsTypes, Todo } from "./types";

const addTodo = (todo: Todo): todoActionsTypes => ({
    type: ADD_TODO,
    payload: todo
});

export {
    addTodo
};