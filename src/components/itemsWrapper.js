import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SingleItem extends PureComponent {

    render () {
        return <p>{this.props.data}</p>
    }
}


class ItemsWrapper extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props);
        return this.props.loadingState ? Object.keys(this.props.videoData).map((val, key) =>
            <SingleItem data = {val} key = {val} />
        ) : null
    }
}
const mapStateToProps = (state) => {
    return {
        videoData: state.videoSearchReducer && state.videoSearchReducer.searchResult,
        loadingState: state.loadingState && state.loadingState.searchResult && state.loadingState.searchResult.loaded
    }
};
export default connect (mapStateToProps) (ItemsWrapper);

ItemsWrapper.propTypes = {
    videoData: PropTypes.object
};

