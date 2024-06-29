import React, { useState, useEffect } from 'react';
import Welcome from '../components/Welcome';
import Home from '../components/Home';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000); // Show welcome screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return showWelcome ? <Welcome /> : <Home />;
};

export default App;
