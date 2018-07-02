// @flow
import React from 'react';
import { Button } from './ui';
import styled from 'styled-components';
import svgAndroid from './img/android-logo.svg';
import svgApple from './img/ios-logo.svg';
import * as tracker from '../tracker/Tracker';

const APP_STORE_LINK = "https://itunes.apple.com/ee/app/change-wallet/id1375897908?mt=8&app=itunes&ign-mpt=uo%3D4";
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.getchange.wallet.cordova";

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

const trackAppleAppLinkClick = () => {
  tracker.track('APPSTORE_APP_LINK');
};

const StyledButton = Button.extend`
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-device-width: 480px){
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const Buttons = () => (
  <Container>
    <InnerContainer>
      <StyledButton
        color="gradient"
        onClick={ () => {
          trackAppleAppLinkClick();
          window.location.href = APP_STORE_LINK;
        }}
      >
        <Image height="18px" src={svgApple} />App Store
      </StyledButton>
      <SpacingDiv />
      <StyledButton
        color="gradient"
        onClick={ () => {
          trackAndroidAppLinkClick();
          window.location.href = PLAY_STORE_LINK;
        }}
      >
        <Image height="18px" src={svgAndroid} />Google Play
      </StyledButton>
    </InnerContainer>
  </Container>
);

export default Buttons;
