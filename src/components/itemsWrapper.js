import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SingleItem extends PureComponent {

    render () {
        return <p>{this.props.data}</p>
    }
}

class ItemsWrapper extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        let { videoData, loadingState, searchKey} = this.props;
        if (loadingState && loadingState.loaded && Object.keys(videoData).length) {
            return Object.keys(this.props.videoData).map((val, key) =>
                <SingleItem data = {val} key = {val} />
            );
        } else if (loadingState && loadingState.loading) {
            return <p>{"Loading..."}</p>;
        } else if (searchKey !== "" && loadingState && loadingState.loaded && videoData && !Object.keys(videoData).length) {
            return <p>{"No results"}</p>
        }
        else {
            return <p>{"Results"}</p>;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        videoData: state.videoSearchReducer && state.videoSearchReducer.searchResult,
        loadingState: state.loadingState && state.loadingState.searchResult && state.loadingState.searchResult,
        searchKey: state.videoSearchReducer.searchKey,
    }
};
ItemsWrapper.propTypes = {
    videoData: PropTypes.object,
    loadingState: PropTypes.object,
    searchKey: PropTypes.string
};
export default connect (mapStateToProps) (ItemsWrapper);


