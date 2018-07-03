import React, { Component } from 'react';
import { SearchVideos } from '../actions/actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.handleVideoSearch = this.handleVideoSearch.bind(this);
        this.state = {
            searchKey: ""
        }
    }
    handleVideoSearch () {
        return (e) => {
            this.setState({searchKey: e.target.value.trim()});
            if (this.searchVideos) {
                clearTimeout(this.searchVideos)
            }
            this.searchVideos = setTimeout(() => this.props.dispatch(SearchVideos("searchResult", this.state.searchKey)), 400);

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
export default connect()(SearchBar);