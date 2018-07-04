import React, { Component } from 'react';
import { SearchVideos, ResetSearchResult, StoreSearchKey } from '../actions/actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.handleVideoSearch = this.handleVideoSearch.bind(this);
    }
    handleVideoSearch () {
        return (e) => {
            this.props.dispatch(StoreSearchKey(e.target.value.trim()));
            if (this.searchVideos) {
                clearTimeout(this.searchVideos)
            }
            this.searchVideos = setTimeout(() => this.props.searchKey !== ""
                ? this.props.dispatch(SearchVideos("searchResult", this.props.searchKey))
                : this.props.dispatch(ResetSearchResult()), 400)

        }
    }

        render () {
            return (
                <div>
                    <input type="text" onChange={this.handleVideoSearch()}/>
                </div>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        searchKey: state.videoSearchReducer.searchKey,

}
};
export default connect(mapStateToProps)(SearchBar);