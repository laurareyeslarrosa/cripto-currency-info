import React from 'react';
import Grid from '@material-ui/core/Grid';
import { baseUrl } from './../../helpers/url.const';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { styles } from './list.style';
import DetailsDialog from './../dialog/dialog';
import {statenameList} from './../../helpers/const';
import { getCriptoCurrencyDailyHistory, getCriptoCurrencyHourlyHistory } from './../../helpers/apiCallHandler';

export default class ListCurrencyItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            criptoCurrencyDailyHistory: [],
            criptoCurrencyHourlyHistory: [],
        }
    }

    handleClickDialogOpen = () => {
        this.setState({ dialogOpen: true });
        getCriptoCurrencyDailyHistory(this, statenameList.dailyHistory, this.props.currencyItem.CoinInfo.Name);
        getCriptoCurrencyHourlyHistory(this, statenameList.hourlyHistory, this.props.currencyItem.CoinInfo.Name);
    };

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    getCardTitle() {
        let title = this.props.currencyItem.CoinInfo.FullName + " (" + this.props.currencyItem.CoinInfo.Name + ")"

        if (title.length > 20)
            title = title.substr(0, 20) + "...";
        return title;
    };

    render() {
        console.log(this.state.criptoCurrencyDailyHistory);
        return (
            <React.Fragment>
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Card>
                        <CardContent style={styles.cardContent}>
                            <Avatar alt="Remy Sharp" src={baseUrl + "/" + this.props.currencyItem.CoinInfo.ImageUrl} />
                            <div style={styles.cardTitleContainer}>
                                <Typography style={styles.cardTitle} color="primary" variant="headline" component="h3">
                                    {this.getCardTitle()}
                                </Typography>
                                <Typography style={styles.cardPriceTag} component="p">
                                    $ {this.props.price}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary" onClick={this.handleClickDialogOpen}>
                                HISTORICAL DATA
                        </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <DetailsDialog
                    criptoCurrencyDailyHistory={this.state.criptoCurrencyDailyHistory.Data}
                    criptoCurrencyHourlyHistory={this.state.criptoCurrencyHourlyHistory.Data}
                    isOpen={this.state.dialogOpen}
                    onCloseClick={this.handleDialogClose}
                    currencyItem={this.props.currencyItem}
                    price={this.props.price} />
            </React.Fragment>
        )
    }
}