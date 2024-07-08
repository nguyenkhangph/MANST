// src/components/Wallet.js
import React, { useState, useEffect } from 'react';
import { Typography, Tabs, Tab, Avatar, Button } from '@mui/material';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import Image from 'next/image';
import styles from '../styles/Wallet.module.css';

const Wallet = () => {
  const { connected, account, connect } = useTonConnectUI();
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Tokens, 1 for NFTs

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={styles.pageContainer}>
      {!connected ? (
        <div className={styles.connectContainer}>
          <TonConnectButton onClick={connect} className={styles.connectButton}>
            Connect TON Wallet
          </TonConnectButton>
        </div>
      ) : (
        <>
          <div className={styles.profileContainer}>
            <Avatar src="/images/main-icon.png" alt="User Avatar" className={styles.avatar} />
            <Typography variant="h6" className={styles.username}>Account_1</Typography>
            <Typography variant="body2" className={styles.userAddress}>{account?.address}</Typography>
          </div>

          <Tabs value={selectedTab} onChange={handleTabChange} className={styles.tabs} centered>
            <Tab label="Tokens" className={styles.tab} />
            <Tab label="NFTs" className={styles.tab} />
          </Tabs>

          <div className={styles.tabPanel}>
            {selectedTab === 0 && (
              <div className={styles.tokenList}>
                <div className={styles.tokenItem}>
                  <Image src="/images/token1.png" alt="NEAR Icon" width={40} height={40} />
                  <div className={styles.tokenInfo}>
                    <Typography variant="body1" className={styles.tokenName}>NEAR</Typography>
                    <Typography variant="body2" className={styles.tokenAmount}>198.24 NEAR</Typography>
                  </div>
                  <div className={styles.tokenValue}>
                    <Typography variant="body1">$6.34</Typography>
                    <Typography variant="body2" className={styles.tokenChangePositive}>2.5%</Typography>
                  </div>
                  <Typography variant="body1" className={styles.tokenTotalValue}>$1251.44</Typography>
                </div>
                <div className={styles.tokenItem}>
                  <Image src="/images/token2.png" alt="Octopus Network Icon" width={40} height={40} />
                  <div className={styles.tokenInfo}>
                    <Typography variant="body1" className={styles.tokenName}>Octopus Network</Typography>
                    <Typography variant="body2" className={styles.tokenAmount}>0.6317 OCT</Typography>
                  </div>
                  <div className={styles.tokenValue}>
                    <Typography variant="body1">$0.71</Typography>
                    <Typography variant="body2" className={styles.tokenChangePositive}>3.87%</Typography>
                  </div>
                  <Typography variant="body1" className={styles.tokenTotalValue}>$0.71</Typography>
                </div>
                <div className={styles.tokenItem}>
                  <Image src="/images/token3.png" alt="DEIP Token Icon" width={40} height={40} />
                  <div className={styles.tokenInfo}>
                    <Typography variant="body1" className={styles.tokenName}>DEIP Token</Typography>
                    <Typography variant="body2" className={styles.tokenAmount}>555.94874 DEIP</Typography>
                  </div>
                  <div className={styles.tokenValue}>
                    <Typography variant="body1">$0.71</Typography>
                    <Typography variant="body2" className={styles.tokenChangeNegative}>-0.97%</Typography>
                  </div>
                  <Typography variant="body1" className={styles.tokenTotalValue}>$1.76</Typography>
                </div>
                <div className={styles.tokenItem}>
                  <Image src="/images/token4.png" alt="Aurora Icon" width={40} height={40} />
                  <div className={styles.tokenInfo}>
                    <Typography variant="body1" className={styles.tokenName}>Aurora</Typography>
                    <Typography variant="body2" className={styles.tokenAmount}>300 Aurora</Typography>
                  </div>
                  <div className={styles.tokenValue}>
                    <Typography variant="body1">$3.79</Typography>
                    <Typography variant="body2" className={styles.tokenChangeNegative}>-0.32%</Typography>
                  </div>
                  <Typography variant="body1" className={styles.tokenTotalValue}>$1137</Typography>
                </div>
                <div className={styles.tokenItem}>
                  <Image src="/images/token5.png" alt="USN Icon" width={40} height={40} />
                  <div className={styles.tokenInfo}>
                    <Typography variant="body1" className={styles.tokenName}>USN</Typography>
                    <Typography variant="body2" className={styles.tokenAmount}>205 USN</Typography>
                  </div>
                  <div className={styles.tokenValue}>
                    <Typography variant="body1">$1.33</Typography>
                    <Typography variant="body2" className={styles.tokenChangePositive}>38.76%</Typography>
                  </div>
                  <Typography variant="body1" className={styles.tokenTotalValue}>$272.65</Typography>
                </div>
                {/* Add more token items similarly */}
              </div>
            )}
            {selectedTab === 1 && (
              <div className={styles.nftList}>
                <div className={styles.nftCard}>
                  <Image src="/images/nft-image.png" alt="NFT Image" width={180} height={180} />
                  <div className={styles.nftInfo}>
                    <Typography variant="body1" className={styles.nftName}>Voucher#1</Typography>
                    <Typography variant="body2" className={styles.nftPrice}>6 TON</Typography>
                  </div>
                </div>
                <div className={styles.nftCard}>
                  <Image src="/images/nft-image1.png" alt="NFT Image" width={180} height={180} />
                  <div className={styles.nftInfo}>
                    <Typography variant="body1" className={styles.nftName}>Voucher#2</Typography>
                    <Typography variant="body2" className={styles.nftPrice}>8 TON</Typography>
                  </div>
                </div>
                <div className={styles.nftCard}>
                  <Image src="/images/nft-image2.png" alt="NFT Image" width={180} height={180} />
                  <div className={styles.nftInfo}>
                    <Typography variant="body1" className={styles.nftName}>Voucher#3</Typography>
                    <Typography variant="body2" className={styles.nftPrice}>10 TON</Typography>
                  </div>
                </div>
                <div className={styles.nftCard}>
                  <Image src="/images/nft-image3.png" alt="NFT Image" width={180} height={180} />
                  <div className={styles.nftInfo}>
                    <Typography variant="body1" className={styles.nftName}>Voucher#4</Typography>
                    <Typography variant="body2" className={styles.nftPrice}>12 TON</Typography>
                  </div>
                </div>
                <div className={styles.nftCard}>
                  <Image src="/images/nft-image4.png" alt="NFT Image" width={180} height={180} />
                  <div className={styles.nftInfo}>
                    <Typography variant="body1" className={styles.nftName}>Voucher#5</Typography>
                    <Typography variant="body2" className={styles.nftPrice}>14 TON</Typography>
                  </div>
                </div>
                {/* Add more NFT items similarly */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Wallet;
