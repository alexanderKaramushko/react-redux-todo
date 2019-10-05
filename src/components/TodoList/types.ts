import { TodoState } from '../../store/todos/types';
import { Dispatch } from 'redux';

export interface Props {
    dispatch: Dispatch;
    todos: TodoState;
};