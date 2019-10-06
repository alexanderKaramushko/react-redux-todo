import { SET_VISIBILITY_FILTER } from "./constants";
import { filters, filtersActionsTypes } from "./types";

const setVisibilityFilter = (filter: filters): filtersActionsTypes => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export {
    setVisibilityFilter
};