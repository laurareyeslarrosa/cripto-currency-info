import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { styles } from './dialog.style';
import Paper from '@material-ui/core/Paper';

export default class DetailsDialog extends React.Component {
    Transition(props) {
        return <Slide direction="up" {...props} />;
    }

    renderToolbar() {
        return (
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={this.props.onCloseClick} aria-label="Close">
                        <i style={styles.headerIconClose} className="material-icons">keyboard_arrow_up</i>
                    </IconButton>
                    <Typography style={styles.headertitle} variant="title" color="inherit">
                        {this.props.currencyItem.CoinInfo.FullName} ({this.props.currencyItem.CoinInfo.Name})
                        </Typography>
                </Toolbar>
            </AppBar>
        )
    }

    renderHighLowLines(data) {
        return (
            <LineChart data={data} style={styles.chart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="high" stroke="#718792" strokeWidth={2} />
                <Line type="monotone" dataKey="low" stroke="#8bc34a" strokeWidth={2} />
            </LineChart>
        )
    }

    renderOpenCloseLines(data) {
        return (
            <LineChart data={data} style={styles.chart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="time" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="open" stroke="#1c313a" strokeWidth={3} />
                <Line type="monotone" dataKey="close" stroke="#5a9216" strokeWidth={3} />
            </LineChart>
        )
    }

    renderChart(data, title, showHighLowData) {
        return (
            <Grid item xs={12} lg={6}>
                <Typography style={styles.chartTitle} color="primary" variant="headline" component="h3">
                    {title}</Typography>
                <Paper>
                    <ResponsiveContainer width="100%" height={300}>
                        {(showHighLowData) ? this.renderHighLowLines(data) : this.renderOpenCloseLines(data)}
                    </ResponsiveContainer>
                </Paper>
            </Grid>
        )
    }

    render() {
        return (
            <Dialog
                fullScreen
                open={this.props.isOpen}
                onClose={this.props.onCloseClick}
                TransitionComponent={this.Transition}
                style={styles.dialog}
            >
                {this.renderToolbar()}
                <div style={styles.dialog}>
                    <div style={styles.dialogBodyContainer}>
                        <Grid container spacing={8}>
                            {this.renderToolbar()}
                            {this.renderChart(this.props.criptoCurrencyDailyHistory, "History high-low (daily)", true)}
                            {this.renderChart(this.props.criptoCurrencyHourlyHistory, "History high-low (hourly)", true)}
                            {this.renderChart(this.props.criptoCurrencyDailyHistory, "History open-close (daily)", false)}
                            {this.renderChart(this.props.criptoCurrencyHourlyHistory, "History open-close (hourly)", false)}
                        </Grid>
                    </div>
                </div>
            </Dialog >
        )
    }
}