import { ADD_TODO, TOGGLE_TODO } from "./constants";

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

export type todoActionsTypes = AddTodo | ToggleTodo;