import YTSearch from 'youtube-api-search';
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

export const LoadingStart = (key) => {
    return {
        type: LOADING_START,
        key
    }
};

export const LoadingSuccess = (key) => {
    return {
        type: LOADING_SUCCESS,
        key
    }
};

export const LoadingFailed = (key) => {
    return {
        type: LOADING_FAILED,
        key
    }
};


export const SaveSearchResults = (payload) => {
    return {
        type: SAVE_SEARCH_RESULTS,
        payload
    }
};

export const ResetSearchResult = () => {
    return {
        type: RESET_SEARCH_RESULTS,
    }
};

export const StoreSearchKey = (key) => {
    return {
        type: STORE_SEARCH_KEY,
        key
    }
};

export const ChangeViewMode = (payload) => {
    return {
        type: STORE_VIEW_MODE,
        payload
    }
};

export const OpenModal = (payload) => {
    return {
        type: OPEN_MODAL,
        payload
    }
};

export const CloseModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

let collectFromResponse = (videos) => {
    return videos.reduce((col, cur) => {
        col[cur.id.videoId] = {
            "id" : cur.id.videoId,
            "title" : cur.snippet.title,
            "publishedAt" : cur.snippet.publishedAt,
            "image" : cur.snippet.thumbnails.default
        };
        return col;
    }, {})
};

export const SearchVideos = (key, searchTerm) => {
    return (dispatch) => {
        dispatch(LoadingStart(key));
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            if (videos) {
                dispatch(SaveSearchResults(collectFromResponse(videos)));
                dispatch(LoadingSuccess(key))
            } else {
                dispatch(LoadingFailed(key))
            }
        });
    }
};