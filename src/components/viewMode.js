import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ChangeViewMode} from "../actions/actions";

class ViewMode extends Component {
    constructor(props) {
        super(props);
        this.changeViewMode = this.changeViewMode.bind(this);
    }

    changeViewMode (value) {
        return () => this.props.dispatch(ChangeViewMode(value))
    }
    render () {
        return (
            <div className="view-mode-switcher">
                <span className={this.props.viewMode === "list" ? "active" : ""} onClick={this.changeViewMode("list")}>{"List"}</span>
                <span className={this.props.viewMode === "grid" ? "active" : ""} onClick={this.changeViewMode("grid")}>{"Grid"}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewMode: state.videoSearchReducer.viewMode
    }
};
export default connect (mapStateToProps)(ViewMode)