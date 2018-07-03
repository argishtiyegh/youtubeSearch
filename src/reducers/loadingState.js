import {LOADING_START, LOADING_SUCCESS, LOADING_FAILED} from "../actions/actionsTypes";


const setLoadingState = (loadingState = {}) => {
    let obj = {};
    switch(loadingState) {
        case "loadingStart":
            obj.loading = true;
            obj.loaded = false;
            obj.failed = false;
            return obj;
        case "loadingSuccess":
            obj.loading = false;
            obj.loaded = true;
            obj.failed = false;
            return obj;
        case "loadingFailed":
            obj.loading = false;
            obj.loaded = false;
            obj.failed = true;
            return obj;
    }
};

export const loadingState = (state = {}, action)  => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                [action.key]: setLoadingState("loadingStart")
            };
        case LOADING_SUCCESS:
            return {
                ...state,
                [action.key]: setLoadingState("loadingSuccess")
            };
        case LOADING_FAILED:
            return {
                ...state,
                [action.key]: setLoadingState("loadingFailed")
            };


        default:
            return state;
    }
};