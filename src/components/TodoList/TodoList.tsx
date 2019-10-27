import React, {Fragment} from 'react';
import TodoItem from '../TodoItem';
import { Props } from './types';

const TodoList = (props: Props) => {
	const { todos, toggleTodo } = props;

    return (
		<Fragment>
			{todos.map(todo => 
				<TodoItem 
					onClick={() => toggleTodo(todo.id)} 
					todo={todo} 
					key={todo.id} 
				/>
			)}
		</Fragment>
    );
};

export default TodoList
