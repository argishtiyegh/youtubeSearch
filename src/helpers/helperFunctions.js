/**
 * @name collectFromResponse
 * @description Collect videos from response
 * @param {Array} videos
 * @returns {Object} new State
 */

export const collectFromResponse = (videos) => {
    return videos.reduce((col, cur) => {
        col[cur.id.videoId] = {
            "id" : cur.id.videoId,
            "title" : cur.snippet.title,
            "publishedAt" : cur.snippet.publishedAt,
            "image" : cur.snippet.thumbnails.medium
        };
        return col;
    }, {})
};