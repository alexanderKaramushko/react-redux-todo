import React, { useRef } from 'react';
import { Props } from '../../containers/AddTodo/types';
import { addTodo } from '../../store/todos/actions';
import { Todo } from '../../store/todos/types';

const AddTodo = (props: Props) => {
    const { dispatch } = props;
    let inputEl = useRef<HTMLInputElement>(null);

    const createNewTodo = (): Todo => {
        const id = Math.ceil(Math.random() * 100);
        const name = inputEl && inputEl.current ? inputEl.current.value : '';
                    
        return {
            id: id,
            name: name,
            completed: false
        };
    };

    const handleAddTask = (e: React.SyntheticEvent): void | boolean => {
        e.preventDefault();

        if (inputEl && inputEl.current) {
            if (inputEl.current.value.trim() === '') return false;
    
            dispatch(addTodo(createNewTodo()));
    
            inputEl.current.value = '';
        };
    };

    return (
        <form onSubmit={handleAddTask}>
            <input type="text" ref={inputEl} />
            <button type="submit">Add task</button>
        </form>
    );
};

export default AddTodo
