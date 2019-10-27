import { Todo } from "../../store/todos/types";

export interface Props {
    todo: Todo;
    onClick: () => void;
};