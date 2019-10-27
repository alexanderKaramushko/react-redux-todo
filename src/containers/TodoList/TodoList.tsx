import { connect } from 'react-redux';
import TodoList from '../../components/TodoList/TodoList';
import { AppState } from '../../store';
import { toggleTodo } from '../../store/todos/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
