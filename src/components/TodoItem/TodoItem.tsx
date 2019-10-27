import React from 'react';
import { Props } from './types';

const TodoItem = (props: Props) => {
	const { todo: { name, completed }, onClick } = props;

	return (
		<li style={{ textDecoration: completed ? 'line-through' : 'initial' }} onClick={onClick}>
			{name}
		</li>
	);
};

export default TodoItem;
