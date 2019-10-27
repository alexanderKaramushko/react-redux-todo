import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TODO } from "./constants";

export interface Todo {
    id: number;
    name: string;
    completed: boolean;
};

export interface TodoState {
    todos: Todo[];
};

interface AddTodo {
    type: typeof ADD_TODO;
    payload: Todo;
};

export interface ToggleTodo {
    type: typeof TOGGLE_TODO;
    id: Todo["id"]
};

export interface RemoveTodo {
    type: typeof REMOVE_TODO;
    id: Todo["id"]
};

export interface ChangeTodo {
    type: typeof CHANGE_TODO;
    id: Todo["id"],
    name: string
};

export type todoActionsTypes = AddTodo | ToggleTodo | RemoveTodo | ChangeTodo;