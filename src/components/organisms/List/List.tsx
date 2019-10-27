import React from 'react';
import styled from 'styled-components';
import { Props } from './types';
import Item from '../../molecules/Item';

const StyledList = styled.ul`
	list-style: none;
	padding-left: 0;
`;

const List = (props: Props) => {
    const { todos, toggleTodo, removeTodo, changeTodo } = props;

    return (
        <StyledList>
            {todos!.map(todo =>
                <Item 
                    todo={todo} 
                    onClick={() => toggleTodo(todo.id)}
                    onRemove={() => removeTodo(todo.id)}
                    onNameChange={(name: string) => changeTodo(todo.id, name)}
                    key={todo.id} 
                />
            )}
        </StyledList>
    );
};

export default List;
