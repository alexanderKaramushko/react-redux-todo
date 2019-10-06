import { combineReducers } from "redux";
import todos from "./todos";
import filters from "./filters";

export const rootReducer = combineReducers({
    todos,
    filters
});

export type AppState = ReturnType<typeof rootReducer>;