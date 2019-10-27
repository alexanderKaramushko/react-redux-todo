import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import { AppState } from '../../store';
import { TodoState, Todo } from '../../store/todos/types';
import { FiltersState } from '../../store/filters/types';
import { VisibilityFilters } from '../../store/filters/constants';
import { toggleTodo } from '../../store/todos/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => {
    const getVisibleTodos = (todos: TodoState["todos"], filters: FiltersState): TodoState["todos"] => {
        switch(filters.activeFilter) {
            case VisibilityFilters.SHOW_ALL:
                return todos;
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter((todo: Todo) => !todo.completed ? todo : null);
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter((todo: Todo) => todo.completed ? todo : null);
            default: 
                throw Error('No filter!');
        };
    };

    return {
        todos: getVisibleTodos(state.todos.todos, state.filters)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (id: Todo["id"]) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
