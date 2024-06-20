import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import '../styles/Game.module.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 50400000,
      farm: 204400,
      taps: 107,
    };
  }

  handleTap() {
    this.setState((prevState) => ({
      taps: prevState.taps + 1,
      balance: prevState.balance + 10, // Example increment
    }));
  }

  render() {
    return (
      <div className="page-container">
        <Typography variant="h4" align="center" style={{ color: 'white' }}>Mondians TAP</Typography>
        <Typography align="center" className="balance">Your Balance MMPro Points</Typography>
        <Typography align="center" className="balance">{this.state.balance}</Typography>
        
        <Box className="circle">
          <img src="/images/main-icon.png" alt="Main Icon" className="icon-image" />
        </Box>
        
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper className="menuItem">
              <Typography>Farm</Typography>
              <Typography>{this.state.farm}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="menuItem">
              <Typography>Taps</Typography>
              <Typography>{this.state.taps}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={2}>
          <img
            src="/images/tap-button.png"
            alt="Tap Button"
            className="tap-image"
            onClick={() => this.handleTap()}
          />
        </Box>

        <Box textAlign="center" mt={2}>
          <Link href="/lucky-spin" legacyBehavior>
            <a className="luckySpinButton">
              <button>Lucky Spin</button>
            </a>
          </Link>
        </Box>
        
        <Grid container spacing={2} className="menu">
          <Grid item xs={3}>
            <Paper className="menuItem">
              <img src="/images/farming-icon.png" alt="Farming" className="icon-image" />
              <Typography>Farming</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="menuItem">
              <img src="/images/friends-icon.png" alt="Friends" className="icon-image" />
              <Typography>Friends</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="menuItem">
              <img src="/images/tasks-icon.png" alt="Tasks" className="icon-image" />
              <Typography>Tasks</Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className="menuItem">
              <img src="/images/vouchers-icon.png" alt="Vouchers" className="icon-image" />
              <Typography>Vouchers</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
