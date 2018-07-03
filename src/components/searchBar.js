import React, { Component } from 'react';
import { SearchVideos } from '../actions/actions';
import { connect } from 'react-redux';
class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.props.dispatch(SearchVideos("searchVideos"))
    }
    render () {
        return (
            <div>
                <input type="text"/>
            </div>
        )
    }
}
export default connect()(SearchBar);