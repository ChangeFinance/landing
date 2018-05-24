// @flow
import React from 'react';
import { Button } from './ui';
import styled from 'styled-components';
import svgAndroid from './img/android-logo.svg';
import pngTransparent from './img/transparent.png';
import * as tracker from '../tracker/Tracker';
import config from "react-global-configuration";

const Container = styled.div`
  max-width: 400px;
  margin: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  margin-right: 10px;
`;

const SpacingDiv = styled.div`
  min-width: 10px;
`;

const trackAndroidAppLinkClick = () => {
  tracker.track('ANDROID_APP_LINK');
};

const StyledButton = Button.extend`
  padding-left: 30px;
  padding-right: 30px;
`;

const Buttons = () => (
  <Container>
    <InnerContainer>
      <a href="https://app.getchange.com">
        <StyledButton color="gradient">
          <Image height="18px" width="0" src={pngTransparent} />Web app
        </StyledButton>
      </a>
      <SpacingDiv />
      <a
        href="https://play.google.com/store/apps/details?id=com.getchange.wallet.cordova"
        onClick={trackAndroidAppLinkClick}
      >
        <StyledButton color="gradient">
          <Image height="18px" src={svgAndroid} />Android
        </StyledButton>
      </a>
    </InnerContainer>
  </Container>
);

export default Buttons;
