import React from 'react';
import styles from '../styles/Earn.module.css';

const missions = [
  { id: 1, title: 'Watch a video', reward: 10, description: 'Watch a promotional video to earn $MANST coins.' },
  { id: 2, title: 'Complete a survey', reward: 20, description: 'Complete a short survey to earn $MANST coins.' },
  { id: 3, title: 'Invite friends', reward: 30, description: 'Invite 5 friends to join the app and earn $MANST coins.' },
  { id: 4, title: 'Daily login', reward: 5, description: 'Log in to the app daily to earn $MANST coins.' },
  { id: 5, title: 'Follow on social media', reward: 15, description: 'Follow us on social media to earn $MANST coins.' }
];

const Earn = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Earn $MANST Coins</h2>
      <ul className={styles.missionList}>
        {missions.map((mission) => (
          <li key={mission.id} className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <h3 className={styles.missionTitle}>{mission.title}</h3>
              <span className={styles.missionReward}>+{mission.reward} $MANST</span>
            </div>
            <p className={styles.missionDescription}>{mission.description}</p>
            <button className={styles.missionButton}>Start</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Earn;
