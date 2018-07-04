import React, {Component, PureComponent} from 'react';
import moment from "moment/moment";
import { connect } from "react-redux";
import {CloseModal, OpenModal} from "../actions/actions";

class Modal extends Component {
    constructor (props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount () {
        window.document.body.addEventListener("click", this.closeModal());
    }
    closeModal () {
        return () => this.props.dispatch(CloseModal());
    }
    componentWillUnmount () {
        window.document.body.removeEventListener("click", this.closeModal());
    }
    render () {
        let {videoId, autoplay, rel, modest} = this.props;
        let videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&rel=${rel}&modestbranding=${modest}`;
        return (<div className="embedVideo">
            <iframe className="iframeVideo" width="100%" height="500px"
                    src={videoSrc}/>
            <button onClick={this.closeModal()}>{"Close"}</button>
        </div>);
    }
}

const EnhancedModal = connect()(Modal);

class SingleItem extends PureComponent {
    render () {
        let {title, imageSrc, publishedDate, viewMode, videoId } = this.props;
        return <div className={`single-video-item ${viewMode}`}>
            <h3 className="title">{`Title: ${title}`}</h3>
            <span>{`Published Date: ${moment(publishedDate).format("DD-MM-YYYY")}`}</span>
            <img src={imageSrc.url} alt={imageSrc.url} onClick={() => this.props.dispatch(OpenModal(videoId))}/>
            {this.props.modal === videoId ? <EnhancedModal videoId = {videoId} autoplay="0" rel="0" modest="1"/> : null}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.videoSearchReducer && state.videoSearchReducer.modal
    };
};
export default connect(mapStateToProps)(SingleItem);