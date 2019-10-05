import { ADD_TODO } from "./constants";

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

export type todoActionsTypes = AddTodo;