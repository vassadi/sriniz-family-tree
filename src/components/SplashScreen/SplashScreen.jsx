import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
  text-align: center;
`;
const SplashImage = styled.img`
  height: 100vh;
`;
const SplashScreen = () => {
  return (
    <SplashContainer>
      <SplashImage src="sft_logo_2.png" />
    </SplashContainer>
  );
};

export default SplashScreen;
