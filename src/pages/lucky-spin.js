import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import '../styles/LuckySpin.module.css';

const LuckySpin = () => {
  const [spinning, setSpinning] = useState(false);
  const [coins, setCoins] = useState(0);

  const handleSpin = () => {
    if (spinning) return; // Prevents multiple clicks
    setSpinning(true);
    console.log('Spin started');
    setTimeout(() => {
      setSpinning(false);
      const earnedCoins = Math.floor(Math.random() * 100); // Random coins
      setCoins(coins + earnedCoins);
      alert(`You earned ${earnedCoins} coins!`);
      console.log('Spin ended');
    }, 2000); // Spin duration
  };

  return (
    <div className="page-container">
      <Link href="/" legacyBehavior>
        <a className="back-button">
          <button>Back</button>
        </a>
      </Link>
      <Typography variant="h4" style={{ color: 'white' }}>Lucky Spin</Typography>
      <Typography style={{ color: 'white', margin: '20px 0' }}>Earn Coins: {coins}</Typography>
      <Box className="spin-circle">
        <img 
          src="/images/spin-icon.png" 
          alt="Spin" 
          className={`spin-image ${spinning ? 'spinning' : ''}`} 
          onLoad={() => console.log('Image loaded')}
        />
      </Box>
      <Box className="spin-button" onClick={handleSpin}>
        <img 
          src="/images/spin-button.png" 
          alt="Spin Button" 
          onClick={() => console.log('Spin button clicked')} 
        />
      </Box>
    </div>
  );
};

export default LuckySpin;
