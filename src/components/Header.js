// src/components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/" legacyBehavior>
        <a className={styles.backLink}>&lt; Back</a>
      </Link>
      <h1 className={styles.title}>Mondians TAP</h1>
    </div>
  );
};

export default Header;
