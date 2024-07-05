import React, { useState } from 'react';
import styles from '../styles/Spin.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LuckySpin = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState(null);

  const prizes = ["$MANST 0.01", "$MANST 0.05", "$MANST 0.10", "$MANST 1.00", "$MANST 40", "$MANST 250", "$MANST 5", "$MANST 10"];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const spinDuration = 3000; // duration of spin in milliseconds
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      setPrize(prizes[randomIndex]);
      setIsSpinning(false);
    }, spinDuration);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mondians TAP Lucky Spin</h1>
      </header>
      <div className={styles.spinWheelContainer}>
        <div className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}>
          <Image src="/images/spin-wheel.png" alt="Spin Wheel" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.pointer}></div>
      </div>
      <div className={styles.result}>
        {prize ? `You won: ${prize}` : 'Spin to win real prize money'}
      </div>
      <button className={styles.spinButton} onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin for $MANST 100'}
      </button>
    </div>
  );
};

export default LuckySpin;
