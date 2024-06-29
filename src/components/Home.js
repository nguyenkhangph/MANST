import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <Image src="/images/main-icon.png" alt="Account Avatar" className={styles.avatar} width={50} height={50} />
        <div className={styles.accountInfo}>
          <span className={styles.accountName}>Account_1</span>
          <div className={styles.notifications}>
            <Image src="/images/noti.png" alt="Notifications" width={24} height={24} />
            <span className={styles.notificationCount}>5</span>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <Image src="/images/main-icon.png" alt="Mondians Avatar" className={styles.mainAvatar} width={150} height={150} />
        <h1 className={styles.title}>Tap & Earn with Modians TAP</h1>
        <p className={styles.description}>
          Dive into the world of Modians TAP mining with the TON bot, your trusty companion for effortless earnings. 
          Let TON handle the complexities while you focus on reaping rewards hassle-free.
        </p>
        <div className={styles.buttons}>
          <Link href="/game" legacyBehavior>
            <a className={styles.buttonLink}>
              <button 
                className={`${styles.button} ${buttonClicked ? styles.buttonClicked : ''}`} 
                onClick={handleButtonClick}
              >
                <Image src="/images/farming-icon.png" alt="Mining Icon" width={24} height={24} />
                Mining
              </button>
            </a>
          </Link>
          <button className={styles.button}>
            <Image src="/images/tasks-icon.png" alt="About Us Icon" width={24} height={24} />
            About Us
          </button>
          <button className={styles.button}>
            <Image src="/images/friends-icon.png" alt="Invite Friend Icon" width={24} height={24} />
            Invite Friend
          </button>
          <Link href="/lucky-spin" legacyBehavior>
            <a className={styles.buttonLink}>
              <button 
                className={`${styles.button} ${buttonClicked ? styles.buttonClicked : ''}`} 
                onClick={handleButtonClick}
              >
                <Image src="/images/spin-icon.png" alt="Spin Icon" width={24} height={24} />
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
