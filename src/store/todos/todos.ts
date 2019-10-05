import { TodoState, todoActionsTypes } from "./types";
import { ADD_TODO, TOGGLE_TODO } from "./constants";

const initialState: TodoState = {
	todos: []
};

const todos = (state = initialState, action: todoActionsTypes): TodoState => {
    switch(action.type) {
        case ADD_TODO:
			return {
				todos: [
					...state.todos,
					action.payload
				]
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => 
					todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
				)
			};
		default:
			return state;
    }
};

export default todos;