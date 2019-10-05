import React, {Fragment} from 'react';
import TodoItem from '../TodoItem';
import { toggleTodo } from '../../store/todos/actions';
import { Props } from './types';

const TodoList = (props: Props) => {
	const { todos: { todos }, dispatch } = props;

	const handleToggleTodo = (id: number) => {
		dispatch(toggleTodo(id));
	};

    return (
		<Fragment>
			{todos.map(todo => 
				<TodoItem 
					onClick={handleToggleTodo.bind(null, todo.id)} 
					todo={todo} 
					key={todo.id} 
				/>
			)}
		</Fragment>
    );
};

export default TodoList
