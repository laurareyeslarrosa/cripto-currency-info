
import React from 'react';
import { getCriptoCurrencyDataList, getCriptoCurrencyPriceList } from './../../helpers/apiCallHandler';
import ListCurrency from './../../components/criptoCurrencyList/list';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false,
            criptoCurrencyDataList: null,
            criptoCurrencyPriceList: null,
        }
    }

    componentWillMount() {
        getCriptoCurrencyDataList(this, "criptoCurrencyDataList");
    }

    componentDidUpdate() {
        if (this.state.criptoCurrencyDataList && !this.state.criptoCurrencyPriceList) {
            let currencyList =
                Object.values(this.state.criptoCurrencyDataList.Data).map((item) =>
                    item.CoinInfo.Name
                ).join();
            getCriptoCurrencyPriceList(this, "criptoCurrencyPriceList", currencyList);
        }
    }

    render() {
        if (this.state.criptoCurrencyDataList && this.state.criptoCurrencyPriceList) {
            return (
                <div><ListCurrency
                    criptoCurrencyDataList={Object.values(this.state.criptoCurrencyDataList.Data)} 
                    criptoCurrencyPriceList={this.state.criptoCurrencyPriceList} />
                </div>
            )
        } else {
            return <div />
        }
        /*
        if (this.state.criptoCurrencyDataList && this.state.criptoCurrencyPriceList) {
            console.log(this.state.criptoCurrencyDataList);
            console.log(this.state.criptoCurrencyPriceList);
            return (
                <div>
                    {Object.values(this.state.criptoCurrencyDataList.Data).map((item) =>
                        <div>{item.Id} - {item.Name}</div>
                    )}
                </div>
            )
        } else {
            return "<div></div>"
        }
        */
    }
}
