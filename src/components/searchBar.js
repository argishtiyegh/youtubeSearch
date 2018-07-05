import React, { Component } from 'react';
import { SearchVideos, ResetSearchResult, StoreSearchKey } from '../actions/actions';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.handleVideoSearch = this.handleVideoSearch.bind(this);
    }
    handleVideoSearch () {
        return (e) => {
            let inputValue = e.target.value.trim();
            if (this.searchVideos) {
                clearTimeout(this.searchVideos)
            }
            if (this.storeKeyTimer) {
                clearTimeout(this.storeKeyTimer)
            }

            //prevent make a request if actual value for an input field does not changed
            this.storeKeyTimer = inputValue !== this.props.searchKey && setTimeout(() => this.props.dispatch(StoreSearchKey(inputValue)), 300);

            // make a request and after cleaning the search field, clear result's view
            this.searchVideos = inputValue !== this.props.searchKey && setTimeout(() => this.props.searchKey !== ""
                ? this.props.dispatch(SearchVideos("searchResult", this.props.searchKey))
                : this.props.dispatch(ResetSearchResult()), 400)
        }
    }
        render () {
            return (
                <div className="input-parent">
                    <input type="text" onChange={this.handleVideoSearch()}/>
                </div>
            )
    }
}
const mapStateToProps = () => {
    return createSelector(
        [
            state => state.videoSearchReducer.searchKey
        ],
        (searchKey) => ({searchKey})
    )
};
export default connect(mapStateToProps)(SearchBar);