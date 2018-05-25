import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class DetailsDialog extends React.Component {
    Transition(props) {
        return <Slide direction="up" {...props} />;
    }

    render() {
        return (
            <Dialog
                fullScreen
                open={this.props.isOpen}
                onClose={this.props.onCloseClick}
                TransitionComponent={this.Transition}
            >
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.props.onCloseClick} aria-label="Close">
                            <i className="material-icons">close</i>
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            {this.props.currencyItem.CoinInfo.FullName} ({this.props.currencyItem.CoinInfo.Name})
                        </Typography>
                    </Toolbar>
                </AppBar>
                <React.Fragment>
                
                </React.Fragment>
            </Dialog>
        )
    }
}