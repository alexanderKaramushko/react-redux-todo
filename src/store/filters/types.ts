import { SET_VISIBILITY_FILTER, VisibilityFilters } from "./constants";

export type filters = typeof VisibilityFilters.SHOW_ALL | typeof VisibilityFilters.SHOW_ACTIVE | typeof VisibilityFilters.SHOW_COMPLETED;

export interface FiltersState {
    activeFilter: filters;
};

export interface SetVisibilityFilter {
    type: typeof SET_VISIBILITY_FILTER,
    filter: filters
}

export type filtersActionsTypes = SetVisibilityFilter;