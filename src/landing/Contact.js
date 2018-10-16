// @flow
import React from 'react';
import styled from 'styled-components';
import ScrollToTarget from './ScrollToTarget';
import breakpoint from 'styled-components-breakpoint';
import reelika from './img/people/reelika.jpg';
import variables from '../ui/variables';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;   
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 600px;
`;

const Heading = styled.h1`
  width: 100%;
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLargest};
  letter-spacing: -1.8px;
  text-align: center;
`;

const Paragraph = styled.p`
  width: 95%;
  font-family: ${variables.fontPrimary};
   font-size: ${variables.fontSizeMedium};
  text-align: center;
`;

const Support = () => (
  <ScrollToTarget hash="#officecontacts" pos="center">
    <Container>
      <InnerContainer>
        <img src={reelika} height="90" width="90" alt="Reelika" />
        <Heading>Contact us via chat, email and phone</Heading>
        <Paragraph>Sounds great? Write to us at <a href="mailto:reelika@getchange.com">reelika@getchange.com</a> or call +372 5623 8950</Paragraph>
      </InnerContainer>
    </Container>
  </ScrollToTarget>
);

export default Support;