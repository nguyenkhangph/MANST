import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/Game.module.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0.08,
      miningValue: 0.02,
      miningRate: 0.01,
    };
  }

  handleMining = () => {
    this.setState((prevState) => ({
      balance: prevState.balance + 1,
    }));
  };

  render() {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.header}>
          <Link href="/" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={`${styles.button} ${styles.backButton}`}>&lt;</Button>
            </a>
          </Link>
          <img src="/images/main-icon.png" alt="Account Avatar" className={styles.avatar} />
          <div className={styles.accountInfo}>
            <span className={styles.accountName}>Account_1</span>
            <div className={styles.notifications}>
              <img src="/images/noti.png" alt="Notifications" />
              <span className={styles.notificationCount}>5</span>
            </div>
          </div>
        </div>

        <Typography variant="h5" align="center" className={styles.title}>Modians TAP</Typography>

        <div className={styles.balanceContainer}>
          <div className={styles.balanceHeader}>
            <Typography className={styles.balanceLabel}>Balance</Typography>
            <Typography className={styles.balanceValue}>{this.state.balance.toFixed(2)} $MANST</Typography>
          </div>
          <div className={styles.balanceDetails}>
            <div className={styles.detailItem}>
              <img src="/images/main-icon.png" alt="Coin Icon" className={styles.iconImage} />
              <Typography>Coin</Typography>
            </div>
          </div>
          <div className={styles.timeDetails}>
            <div className={styles.detailItem}>
              <img src="/images/time-icon.png" alt="Time Icon" className={styles.iconImage} />
              <Typography className={styles.timeLeft}>0 min left</Typography>
              <Typography className={styles.miningRate}>Mining: {this.state.miningRate} MANST/h</Typography>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
        </div>

        <Box className={styles.miningContainer} onClick={this.handleMining}>
          <img src="/images/tap-button.png" alt="Mining Image" className={styles.miningImage} />
        </Box>

        <div className={styles.miningValueContainer}>
          <div className={styles.miningValueHeader}>
            <Typography className={styles.miningValueLabel}>Mining value</Typography>
            <Typography className={styles.miningValue}>+{this.state.miningValue.toFixed(2)} $MANST</Typography>
          </div>
          <Button className={`${styles.button} ${styles.buttonPrimary}`} onClick={this.handleClaim}>Claim</Button>
        </div>

        <div className={styles.actionsContainer}>
          <Link href="/missions" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={`${styles.button} ${styles.buttonPrimary}`}>Missions</Button>
            </a>
          </Link>
          <Link href="/upgrade" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={`${styles.button} ${styles.buttonPrimary}`}>Upgrade</Button>
            </a>
          </Link>
          <Link href="/marketplace" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={`${styles.button} ${styles.buttonPrimary}`}>Marketplace</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
