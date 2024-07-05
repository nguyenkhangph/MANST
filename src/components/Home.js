// src/components/Home.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 1000); // Reset after 1 second
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/images/main-icon.png" alt="Account Avatar" className={styles.avatar} />
        <div className={styles.accountInfo}>
          <span className={styles.accountName}>Account_1</span>
          <div className={styles.notifications}>
            <img src="/images/noti.png" alt="Notifications" />
            <span className={styles.notificationCount}>5</span>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <img src="/images/main-icon.png" alt="Mondians Avatar" className={styles.mainAvatar} />
        <h1 className={styles.title}>Tap & Earn with Mondians TAP</h1>
        <p className={styles.description}>
          Dive into the world of Mondians TAP mining with the TON bot, your trusty companion for effortless earnings. 
          Let TON handle the complexities while you focus on reaping rewards hassle-free.
        </p>
        <div className={styles.buttons}>
          <Link href="/game" legacyBehavior>
            <a className={styles.buttonLink}>
              <button 
                className={`${styles.button} ${buttonClicked ? styles.buttonClicked : ''}`} 
                onClick={handleButtonClick}
              >
                Mining
              </button>
            </a>
          </Link>
          <button className={styles.button}>About Us</button>
          <button className={styles.button}>Invite Friend</button>
          <Link href="/lucky-spin" legacyBehavior>
            <a className={styles.buttonLink}>
              <button 
                className={`${styles.button} ${buttonClicked ? styles.buttonClicked : ''}`} 
                onClick={handleButtonClick}
              >
                Spin
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
