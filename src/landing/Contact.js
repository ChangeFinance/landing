// @flow
import React from 'react';
import styled from 'styled-components';
import ScrollToTarget from './ScrollToTarget';
import reelika from './img/people/reelika.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const Heading = styled.h1`
  width: 600px;
  font-family: OpenSans;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -1.8px;
  text-align: center;
  color: #333;
`;

const Paragraph = styled.p`
  width: 527px;
  font-family: OpenSans;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #070707;
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