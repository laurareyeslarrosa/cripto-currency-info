import React from 'react';
import ListCorrencyItem from './list.item';

export default class ListCurrency extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.criptoCurrencyDataList.map((item) =>
                    <ListCorrencyItem 
                        currencyItem={item}
                        price={this.props.criptoCurrencyPriceList[item.CoinInfo.Name].USD}/>
                )}
            </div>
        )
    }
}