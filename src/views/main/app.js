
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { getCriptoCurrencyDataList, getCriptoCurrencyPriceList } from './../../helpers/apiCallHandler';
import ListCurrency from './../../components/criptoCurrencyList/list';
import { myMuiTheme } from './../../content/styles/index.style';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './../../components/header/header';
import {statenameList} from './../../helpers/const';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            criptoCurrencyDataList: null,
            criptoCurrencyPriceList: null,
        }
    }

    componentWillMount() {
        getCriptoCurrencyDataList(this, statenameList.dataList);
    }

    componentDidUpdate() {
        if (this.state.criptoCurrencyDataList && !this.state.criptoCurrencyPriceList) {
            let currencyList =
                Object.values(this.state.criptoCurrencyDataList.Data).map((item) =>
                    item.CoinInfo.Name
                ).join();
            getCriptoCurrencyPriceList(this, statenameList.priceList, currencyList);
        }
    }

    render() {
        if (this.state.criptoCurrencyDataList && this.state.criptoCurrencyPriceList) {
            return (
                <React.Fragment>
                    <CssBaseline />
                    <MuiThemeProvider theme={myMuiTheme}>
                        <Header />
                        <ListCurrency
                            criptoCurrencyDataList={Object.values(this.state.criptoCurrencyDataList.Data)}
                            criptoCurrencyPriceList={this.state.criptoCurrencyPriceList} />
                    </MuiThemeProvider>
                </React.Fragment>
            )
        } else {
            return <div />
        }
    }
}