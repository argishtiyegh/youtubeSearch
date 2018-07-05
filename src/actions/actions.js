import YTSearch from 'youtube-api-search';
import { collectFromResponse } from "../helpers/helperFunctions"
import {
    SAVE_SEARCH_RESULTS,
    LOADING_START,
    LOADING_SUCCESS,
    LOADING_FAILED,
    RESET_SEARCH_RESULTS,
    STORE_SEARCH_KEY,
    STORE_VIEW_MODE,
    OPEN_MODAL,
    CLOSE_MODAL
} from './actionsTypes';
const API_KEY = 'AIzaSyBYUwCD-95LqkJq6bcvMFbVJxr5TC6QH4U';

/**
 * @name LoadingStart
 * @description Start loading action
 * @param {String} key
 * @returns {Object}
 */
export const LoadingStart = (key) => {
    return {
        type: LOADING_START,
        key
    }
};

/**
 * @name LoadingSuccess
 * @description Loading succeed
 * @param {String} key
 * @returns {Object}
 */
export const LoadingSuccess = (key) => {
    return {
        type: LOADING_SUCCESS,
        key
    }
};

/**
 * @name LoadingFailed
 * @description Loading failed
 * @param {String} key
 * @returns {Object}
 */
export const LoadingFailed = (key) => {
    return {
        type: LOADING_FAILED,
        key
    }
};

/**
 * @name SaveSearchResults
 * @description Keep search results in store
 * @param {Object} payload of search results
 * @returns {Object}
 */
export const SaveSearchResults = (payload) => {
    return {
        type: SAVE_SEARCH_RESULTS,
        payload
    }
};

/**
 * @name ResetSearchResult
 * @description Reset search results from store
 * @returns {Object}
 */
export const ResetSearchResult = () => {
    return {
        type: RESET_SEARCH_RESULTS,
    }
};

/**
 * @name StoreSearchKey
 * @description Keep search input value in store
 * @param {String} key, the value of search input
 * @returns {Object}
 */
export const StoreSearchKey = (key) => {
    return {
        type: STORE_SEARCH_KEY,
        key
    }
};

/**
 * @name ChangeViewMode
 * @description Change the type of view mode
 * @param {String} payload type of view
 * @returns {Object}
 */
export const ChangeViewMode = (payload) => {
    return {
        type: STORE_VIEW_MODE,
        payload
    }
};

/**
 * @name OpenModal
 * @description Opens modal embed with video
 * @param {String} payload videoId
 * @returns {Object}
 */
export const OpenModal = (payload) => {
    return {
        type: OPEN_MODAL,
        payload
    }
};

/**
 * @name CloseModal
 * @description Closes modal
 * @returns {Object}
 */
export const CloseModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

/**
 * @name SearchVideos
 * @description Search videos
 * @param {String} key where to store the search results
 * @param {String} searchTerm
 * @returns {Function} async action dispatcher
 */
export const SearchVideos = (key, searchTerm) => {
    return (dispatch) => {
        dispatch(LoadingStart(key));
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            if (videos) {
                dispatch(SaveSearchResults(collectFromResponse(videos)));
                dispatch(LoadingSuccess(key));
            } else {
                dispatch(LoadingFailed(key))
            }
        });
    }
};