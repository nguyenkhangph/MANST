import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
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
              <button className={`${styles.button} ${styles.backButton}`}>&lt;</button>
            </a>
          </Link>
        </div>

        <div className={styles.accountInfoContainer}>
          <div className={styles.accountInfo}>
            <Image src="/images/main-icon.png" alt="Account Avatar" className={styles.avatar} width={50} height={50} />
            <span className={styles.accountName}>Account_1</span>
          </div>
          <div className={styles.notifications}>
            <Image src="/images/noti.png" alt="Notifications" width={24} height={24} />
            <span className={styles.notificationCount}>5</span>
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
              <Image src="/images/main-icon.png" alt="Coin Icon" className={styles.iconImage} width={24} height={24} />
              <Typography>Coin</Typography>
            </div>
          </div>
          <div className={styles.timeDetails}>
            <div className={styles.detailItem}>
              <Image src="/images/time-icon.png" alt="Time Icon" className={styles.iconImage} width={24} height={24} />
              <Typography className={styles.timeLeft}>0 min left</Typography>
              <Typography className={styles.miningRate}>Mining: {this.state.miningRate} MANST/h</Typography>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>
        </div>

        <Box className={styles.miningContainer} onClick={this.handleMining}>
          <Image src="/images/tap-button.png" alt="Mining Image" className={styles.miningImage} layout="responsive" width={400} height={300} />
        </Box>

        <div className={styles.miningValueContainer}>
          <div className={styles.miningValueHeader}>
            <Typography className={styles.miningValueLabel}>Mining value</Typography>
            <Typography className={styles.miningValue}>+{this.state.miningValue.toFixed(2)} $MANST</Typography>
          </div>
          <Button className={styles.button} onClick={this.handleClaim}>Claim</Button>
        </div>

        <div className={styles.actionsContainer}>
          <Link href="/missions" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={styles.button}>Missions</Button>
            </a>
          </Link>
          <Link href="/upgrade" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={styles.button}>Upgrade</Button>
            </a>
          </Link>
          <Link href="/marketplace" legacyBehavior>
            <a className={styles.buttonLink}>
              <Button className={styles.button}>Marketplace</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
