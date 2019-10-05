import { TodoState, todoActionsTypes } from "./types";
import { ADD_TODO } from "./constants";

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
		default:
			return state;
    }
};

export default todos;