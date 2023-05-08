import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MyFamilyTree from './components/FamilyTree';
import SplashScreen from './components/SplashScreen';

import './App.css';

function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);
  return (
    <div className="App">
      {splash ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <MyFamilyTree />
        </>
      )}
    </div>
  );
}

export default App;
