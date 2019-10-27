import { filtersActionsTypes, FiltersState } from "./types";
import { VisibilityFilters, SET_VISIBILITY_FILTER } from "./constants";

const initialState: FiltersState = {
	activeFilter: VisibilityFilters.SHOW_ALL
};

const todos = (state = initialState, action: filtersActionsTypes): FiltersState => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
			return {
				...state, 
				activeFilter: action.filter
			};
		default:
			return state;
    }
};

export default todos;