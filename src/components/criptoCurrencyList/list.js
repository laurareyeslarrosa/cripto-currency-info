import React from 'react';
import ListCurrencyItem from './list.item';
import Grid from '@material-ui/core/Grid';
import {styles} from './list.style';

export default class ListCurrency extends React.Component {

    render() {
        return (
            <div style={styles.listContainer}>
                <Grid container spacing={8}>
                    {this.props.criptoCurrencyDataList.map((item, index) =>
                        <ListCurrencyItem
                            key={index}
                            currencyItem={item}
                            price={this.props.criptoCurrencyPriceList[item.CoinInfo.Name].USD} />
                    )}
                </Grid>
            </div>
        )
    }
}