import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Game.module.css';

const Game = () => {
  const [balance, setBalance] = useState(0.08);
  const [tapsLeft, setTapsLeft] = useState(1000);
  const [tapEffects, setTapEffects] = useState([]);

  const handleTap = () => {
    if (tapsLeft > 0) {
      setBalance(balance + 0.01);
      setTapsLeft(tapsLeft - 1);

      const newEffect = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      };

      setTapEffects([...tapEffects, newEffect]);
      setTimeout(() => setTapEffects(tapEffects.filter(effect => effect.id !== newEffect.id)), 500);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mondians TAP</h1>
      <div className={styles.tapContainer} onClick={handleTap}>
        <Image src="/images/tap-button1.png" alt="Tap Icon" width={300} height={300} />
        {tapEffects.map(effect => (
          <div
            key={effect.id}
            className={styles.tapEffect}
            style={{ top: `${effect.y}%`, left: `${effect.x}%` }}
          >
            +1
          </div>
        ))}
      </div>
      <div className={styles.balanceContainer}>
        <div className={styles.balanceHeader}>
          <span>Balance: {balance.toFixed(2)} $MANST</span>
        </div>
        <div className={styles.tapsLeftContainer}>
          <div className={styles.tapsLeft}>
            <Image src="/images/lightning-icon.png" alt="Lightning Icon" width={40} height={40} />
            <span>{tapsLeft}/1000</span>
          </div>
          <div className={styles.boost}>
            <Image src="/images/booster-icon.png" alt="Booster Icon" width={40} height={40} />
            <span>Boost</span>
          </div>
        </div>
      </div>
      <ul className={styles.missionList}>
        <li className={styles.missionItem}>
          <div className={styles.missionHeader}>
            <Image src="/images/channel-icon.png" alt="Channel Icon" width={40} height={40} />
            <span className={styles.missionTitle}>Join our channel</span>
            <span className={styles.missionReward}>+10 $MANST</span>
          </div>
          <p className={styles.missionDescription}>Join our Telegram channel and stay updated with the latest news.</p>
          <button className={styles.missionButton}>Join Now</button>
        </li>
        <li className={styles.missionItem}>
          <div className={styles.missionHeader}>
            <Image src="/images/friends-icon.png" alt="Invite Icon" width={40} height={40} />
            <span className={styles.missionTitle}>Invite friends</span>
            <span className={styles.missionReward}>+20 $MANST</span>
          </div>
          <p className={styles.missionDescription}>Invite your friends to join Mondians TAP and earn rewards together.</p>
          <button className={styles.missionButton}>Invite Now</button>
        </li>
        <li className={styles.missionItem}>
          <div className={styles.missionHeader}>
            <Image src="/images/tasks-icon.png" alt="Tasks Icon" width={40} height={40} />
            <span className={styles.missionTitle}>Complete tasks</span>
            <span className={styles.missionReward}>+30 $MANST</span>
          </div>
          <p className={styles.missionDescription}>Complete daily tasks to earn more $MANST.</p>
          <button className={styles.missionButton}>View Tasks</button>
        </li>
      </ul>
    </div>
  );
};

export default Game;
