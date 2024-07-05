// src/components/Game.js
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Game.module.css';

export default function Game() {
  const [balance, setBalance] = useState(0.08);
  const [tapCount, setTapCount] = useState(0);
  const [remainingTaps, setRemainingTaps] = useState(1000);

  useEffect(() => {
    const tapsLeft = 1000 - tapCount;
    setRemainingTaps(tapsLeft);
  }, [tapCount]);

  const handleMining = () => {
    if (remainingTaps > 0) {
      setBalance(balance + 0.01);
      setTapCount(tapCount + 1);
    }
  };

  return (
    <div className={styles.pageContainer}>

      <div className={styles.balanceContainer}>
        <div className={styles.balanceHeader}>
          <Typography className={styles.balanceLabel}>Balance</Typography>
          <Typography className={styles.balanceValue}>{balance.toFixed(2)} $MANST</Typography>
        </div>
        <div className={styles.balanceDetails}>
          <div className={styles.detailItem}>
            <Image src="/images/main-icon.png" alt="Coin Icon" className={styles.iconImage} width={24} height={24} />
            <Typography>Coin</Typography>
          </div>
        </div>
      </div>
      <Box className={styles.miningContainer} onClick={handleMining}>
        <div className={styles.progressCircle}>
          <Image src="/images/tap-button.png" alt="Mining Image" className={styles.miningImage} layout="fill" objectFit="contain" />
          <svg className={styles.progressRing} width="300" height="300">
            <circle className={styles.progressRingCircle} stroke="#ccff00" strokeWidth="10" fill="transparent" r="145" cx="150" cy="150" />
            <circle className={styles.progressRingCircle} stroke="#00cc00" strokeWidth="10" fill="transparent" r="145" cx="150" cy="150" style={{ strokeDasharray: 2 * Math.PI * 145, strokeDashoffset: (2 * Math.PI * 145) * (1 - (tapCount / 1000)) }} />
          </svg>
        </div>
      </Box>
      <Typography variant="body1" align="center" className={styles.tapCount}>Taps left: {remainingTaps}</Typography>
    </div>
  );
}
