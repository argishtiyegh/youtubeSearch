import {SAVE_SEARCH_RESULTS, LOADING_START, LOADING_SUCCESS, LOADING_FAILED} from './actionsTypes';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBYUwCD-95LqkJq6bcvMFbVJxr5TC6QH4U';

const LoadingStart = (key) => {
    return {
        type: LOADING_START,
        key
    }
};

const LoadingSuccess = (key) => {
    return {
        type: LOADING_SUCCESS,
        key
    }
};

const LoadingFailed = (key) => {
    return {
        type: LOADING_FAILED,
        key
    }
};


const SaveSearchResults = (payload) => {
    return {
        type: SAVE_SEARCH_RESULTS,
        payload
    }
};


let collectFromResponse = (videos) => {
    return videos.reduce((col, cur) => {
        col[cur.id.videoId] = {
            "id" : cur.id.videoId,
            "title" : cur.snippet.title,
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