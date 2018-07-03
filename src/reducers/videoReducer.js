import {SAVE_SEARCH_RESULTS} from "../actions/actionsTypes";

export const videoSearchReducer = (state = {}, action)  => {
    switch (action.type) {
        case SAVE_SEARCH_RESULTS:
            return {
                searchResult: action.payload
            }
    }
    return state;
};