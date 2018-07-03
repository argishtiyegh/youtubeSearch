import {SAVE_SEARCH_RESULTS, RESET_SEARCH_RESULTS} from "../actions/actionsTypes";

export const videoSearchReducer = (state = {}, action)  => {
    switch (action.type) {
        case SAVE_SEARCH_RESULTS:
            return {
                ...state,
                searchResult: action.payload
            };
        case RESET_SEARCH_RESULTS:
            return {
                ...state,
                searchResult: {}
            };
    }
    return state;
};