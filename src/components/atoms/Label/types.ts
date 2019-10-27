import { Todo } from "../../../store/todos/types";

export interface Props {
    name: Todo["name"];
    completed?: boolean;
};