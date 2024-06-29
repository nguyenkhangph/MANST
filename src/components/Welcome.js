import React from 'react';
import Image from 'next/image';
import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/main-icon.png" alt="Welcome Image" className={styles.welcomeImage} width={300} height={300} />
    </div>
  );
};

export default Welcome;
