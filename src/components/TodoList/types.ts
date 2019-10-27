import { TodoState, Todo } from '../../store/todos/types';

export interface Props {
    todos: TodoState["todos"];
    toggleTodo: (id: Todo["id"]) => void;
};