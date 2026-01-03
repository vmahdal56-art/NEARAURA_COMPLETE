import React from 'react';
import ComingSoon from './ComingSoon';
import SovereignApp from './SovereignApp';

const App = () => {
  const isStaging = 
    window.location.hostname.includes('staging') || 
    window.location.hostname.includes('localhost');

  return isStaging ? <SovereignApp /> :  <ComingSoon /> ;
};

export default App;