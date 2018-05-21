import React from 'react';

export default class ListCorrencyItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.currencyItem);
        console.log(this.props.price);
        return (
            <div>1234</div>
        )
    }
}