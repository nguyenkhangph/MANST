import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/game" legacyBehavior>
        <a className={styles.footerLink}>
          <img src="/images/mine-icon.png" alt="Game" className={styles.icon} />
          Mine
        </a>
      </Link>
      <Link href="/earn" legacyBehavior>
        <a className={styles.footerLink}>
          <img src="/images/earn-icon.png" alt="Earn" className={styles.icon} />
          Earn
        </a>
      </Link>
      <Link href="/lucky-spin" legacyBehavior>
        <a className={styles.footerLink}>
          <img src="/images/spin-icon.png" alt="Spin" className={styles.icon} />
          Spin
        </a>
      </Link>
      <Link href="/wallet" legacyBehavior>
        <a className={styles.footerLink}>
          <img src="/images/wallet-icon.png" alt="Wallet" className={styles.icon} />
          Wallet
        </a>
      </Link>
    </div>
  );
};

export default Footer;
