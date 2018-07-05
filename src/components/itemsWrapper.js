import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleItem from './singleItem';


class ItemsWrapper extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps (nextProps) {
        let { loadingState, videoData } = this.props;
        if (loadingState && loadingState.loading && nextProps.loadingState && nextProps.loadingState.loaded && !!videoData.length && !Object.keys(videoData).length) {
            this.setState({noResults: true})
        } else {
            this.setState({noResults: false})
        }
    }
    render () {
        let { videoData, loadingState, viewMode} = this.props;
        if (this.state.noResults) {
            return <p>{"No results"}</p>
        } else if (loadingState && loadingState.loaded && Object.keys(videoData).length) {
            return <div className="item-wrapper">
                {Object.keys(this.props.videoData).map((videoId) =>
                        <SingleItem videoId = {videoId}
                                    key = {videoId}
                                    viewMode = {viewMode}
                                    title = {videoData[videoId].title}
                                    publishedDate = {videoData[videoId].publishedAt}
                                    imageSrc = {videoData[videoId].image}
                        />
            )}</div>
        } else if (loadingState && loadingState.loading) {
            return <p>{"Loading..."}</p>;
        } else {
            return <p>{"Results"}</p>;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        videoData: state.videoSearchReducer && state.videoSearchReducer.searchResult,
        loadingState: state.loadingState && state.loadingState.searchResult && state.loadingState.searchResult,
        searchKey: state.videoSearchReducer.searchKey,
        viewMode: state.videoSearchReducer.viewMode
    }
};
ItemsWrapper.propTypes = {
    videoData: PropTypes.object,
    loadingState: PropTypes.object,
    searchKey: PropTypes.string
};
export default connect (mapStateToProps) (ItemsWrapper);


