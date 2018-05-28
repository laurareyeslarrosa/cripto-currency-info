import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './header.style';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <i class="material-icons" style={styles.icon}>account_balance_wallet</i>
          <Typography variant="title" color="inherit" style={styles.title}>
            Cripto currency info
              </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}