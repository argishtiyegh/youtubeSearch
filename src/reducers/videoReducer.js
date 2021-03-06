import {
    SAVE_SEARCH_RESULTS,
    RESET_SEARCH_RESULTS,
    STORE_SEARCH_KEY,
    STORE_VIEW_MODE,
    OPEN_MODAL,
    CLOSE_MODAL
} from "../actions/actionsTypes";

export const videoSearchReducer = (state = {searchKey: "", viewMode: "list"}, action)  => {
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
            };
        case STORE_VIEW_MODE:
            return {
                ...state,
                viewMode: action.payload
            };
        case OPEN_MODAL:
            return {
                ...state,
                modal: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};