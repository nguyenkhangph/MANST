import React from 'react';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <img src="/images/main-icon.png" alt="Mondians TAP Avatar" className={styles.avatar} />
      </div>
      <h1 className={styles.title}>Mondians TAP</h1>
    </div>
  );
};

export default Welcome;
