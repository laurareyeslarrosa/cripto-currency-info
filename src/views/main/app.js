
import React from 'react';
import { getCriptoCurrencyDataList, getCriptoCurrencyDataDetails } from './../../helpers/apiCallHandler';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false,
            criptoCurrencyDataList: null,
            criptoCurrencyDataDetails: null
        }
    }

    componentWillMount() {
        getCriptoCurrencyDataList(this, "criptoCurrencyDataList");
        getCriptoCurrencyDataDetails(this, "criptoCurrencyDataDetails");
    }

    render() {
       if (this.state.criptoCurrencyDataList) {
        return (
            <div>
                {this.state.criptoCurrencyDataList.data.map((item) =>
                    <div>{item.id} - {item.name} - {item.symbol}</div>
                )}
            </div>
        )
       } else {
           return "<div></div>"
       }
    }
}
