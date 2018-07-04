import {SAVE_SEARCH_RESULTS, RESET_SEARCH_RESULTS, STORE_SEARCH_KEY} from "../actions/actionsTypes";

export const videoSearchReducer = (state = {searchKey: ""}, action)  => {
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
        case STORE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.key
            }

    }
    return state;
};