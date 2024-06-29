import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/LuckySpin.module.css';

const LuckySpin = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState(null);

  const prizes = ["$MANST 0.01", "$MANST 0.05", "$MANST 0.10", "$MANST 1.00", "$MANST 40", "$MANST 250", "$$MANST 5", "$$MANST 10"];

  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const result = Math.floor(Math.random() * prizes.length);
      setTimeout(() => {
        setSpinResult(prizes[result]);
        setIsSpinning(false);
      }, 3000); // Spinning animation duration
    }
  };

  return (
    <div className={styles.container}>
      <Link href="/" legacyBehavior>
        <a className={styles.buttonLink}>
          <button className={styles.backButton}>&lt;</button>
        </a>
      </Link>
      <h1 className={styles.title}>Let's Spin</h1>
      <p className={styles.subtitle}>Spin to win real prize money</p>
      <div className={styles.wheelContainer}>
        <div className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}>
          <img src="/images/spin-icon.png" alt="Spin Wheel" className={styles.spinWheel} />
        </div>
        <div className={styles.indicator}></div>
      </div>
      <button className={styles.spinButton} onClick={handleSpin}>
        {isSpinning ? "Spinning..." : "Spin for $MANST 100"}
      </button>
      {spinResult && <p className={styles.result}>You won {spinResult}!</p>}
    </div>
  );
};

export default LuckySpin;
