import React from 'react';
import Image from 'next/image';
import styles from '../styles/Earn.module.css';

const Earn = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tap & Earn</h1>
      <div className={styles.banner}>
        <Image
          src="/images/banner.png"
          alt="Banner"
          className={styles.banner}
          width={1080}     // Here we set the width to 1080
          height={1080}    // Here we set the height to 1080
          layout="responsive"
        />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image src="/images/present-icon.png" alt="Present Icon" width={40} height={40} />
          <h2 className={styles.sectionTitle}>Claim rewards</h2>
        </div>
        <div className={styles.mission}>
          <div className={styles.missionHeader}>
            <Image src="/images/wallet-icon.png" alt="Wallet Icon" width={40} height={40} />
            <div>
              <h3 className={styles.missionTitle}>Pair Ton Wallet</h3>
              <p className={styles.missionDescription}>Just get ready, #MANST can come</p>
            </div>
          </div>
          <div className={styles.missionRewardContainer}>
            <span className={styles.missionReward}>+500 $MANST</span>
            <button className={styles.missionButton}>Claim 500 $MANST</button>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image src="/images/connect-icon.png" alt="Connect Icon" width={40} height={40} />
          <h2 className={styles.sectionTitle}>Stay in touch with us</h2>
        </div>
        <ul className={styles.missionList}>
          <li className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <Image src="/images/telegram-icon.png" alt="Telegram Icon" width={40} height={40} />
              <div>
                <h3 className={styles.missionTitle}>Follow our Telegram</h3>
              </div>
            </div>
            <div className={styles.missionRewardContainer}>
              <span className={styles.missionReward}>+10 $MANST</span>
              <button className={styles.missionButton}>Follow</button>
            </div>
          </li>
          <li className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <Image src="/images/x-icon.png" alt="X Icon" width={40} height={40} />
              <div>
                <h3 className={styles.missionTitle}>Follow our X channel</h3>
              </div>
            </div>
            <div className={styles.missionRewardContainer}>
              <span className={styles.missionReward}>+15 $MANST</span>
              <button className={styles.missionButton}>Follow</button>
            </div>
          </li>
          <li className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <Image src="/images/community-icon.png" alt="Community Icon" width={40} height={40} />
              <div>
                <h3 className={styles.missionTitle}>Join our community</h3>
              </div>
            </div>
            <div className={styles.missionRewardContainer}>
              <span className={styles.missionReward}>+20 $MANST</span>
              <button className={styles.missionButton}>Join</button>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image src="/images/extra-icon.png" alt="Extra Icon" width={40} height={40} />
          <h2 className={styles.sectionTitle}>Extra</h2>
        </div>
        <ul className={styles.missionList}>
          <li className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <Image src="/images/deposit-icon.png" alt="Deposit Icon" width={40} height={40} />
              <div>
                <h3 className={styles.missionTitle}>Deposit tokens</h3>
              </div>
            </div>
            <div className={styles.missionRewardContainer}>
              <span className={styles.missionReward}>+50 $MANST</span>
              <button className={styles.missionButton}>Deposit</button>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image src="/images/play-icon.png" alt="Play Icon" width={40} height={40} />
          <h2 className={styles.sectionTitle}>Play with your friends</h2>
        </div>
        <ul className={styles.missionList}>
          <li className={styles.missionItem}>
            <div className={styles.missionHeader}>
              <Image src="/images/play-friends-icon.png" alt="Play Friends Icon" width={40} height={40} />
              <div>
                <h3 className={styles.missionTitle}>Play game with friends</h3>
              </div>
            </div>
            <div className={styles.missionRewardContainer}>
              <span className={styles.missionReward}>+40 $MANST</span>
              <button className={styles.missionButton}>Play Now</button>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <Image src="/images/invite-icon.png" alt="Invite Icon" width={40} height={40} />
          <h2 className={styles.sectionTitle}>Invite friends to Mondians TAP</h2>
        </div>
        <div className={styles.referral}>
          <p>Your referral link:</p>
          <div className={styles.referralLink}>https://t.me/mondianstap/...</div>
          <div className={styles.referralButtons}>
            <button className={styles.referralButton}>Copy Link</button>
            <button className={styles.referralButton}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
