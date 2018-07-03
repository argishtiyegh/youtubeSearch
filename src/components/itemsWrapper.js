import React, { Component, PureComponent } from 'react';

class SingleItem extends PureComponent {

    render () {
        return <p>{"single item"}</p>
    }
}


class ItemsWrapper extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <SingleItem />
        )
    }
}
export default ItemsWrapper;

